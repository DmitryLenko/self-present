ARG VERSION=12.13.1

FROM node:${VERSION}-alpine as builder

ARG NODE_ENV=production

RUN apk add --no-cache --virtual .gyp python make g++

COPY package.json .
RUN yarn install --production=false --no-lockfile && yarn cache clean

COPY webpack ./webpack
COPY src ./src
COPY templates ./templates
COPY .babelrc .
COPY tsconfig.json .
RUN yarn run build

FROM node:${VERSION}-alpine as app

ARG NODE_ENV=production
ENV PORT=8080
WORKDIR /usr/src/app

COPY --from=builder dist ./dist
COPY package.json .

USER node

CMD [ "npm", "run", "start" ]
