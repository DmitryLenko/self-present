import express from 'express'

const port = process.env.PORT || 8080

const app = express()

/**
 * here should be live react compiling via webpack
 * run server -> compile new ui bundles -> sent it to the client by page
 * change file -> restart app -> recompile all flow
 * additional: create separate webpack.config for ui for using it here
 * also check storybook, tests_
 */

app.get('*', (_, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
