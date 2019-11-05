import express from 'express'
import React from 'react';
import { renderToString } from 'react-dom/server';

import toHtml from './toHtml';
import { HelloWorld } from '../components/app';

const port = process.env.PORT || 8080

const app = express()

app.get('*', (_, res) => {
  const app = renderToString(React.createElement(HelloWorld))

  res.send(
    toHtml({ body: app })
  )
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
