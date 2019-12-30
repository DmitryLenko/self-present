import React from 'react'
import { renderToNodeStream } from "react-dom/server"
import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import { RequestHandler } from 'express'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { App } from '../components/app'
import { rootReducer } from '../store/rootReducer'

const store = createStore(rootReducer)
const readFile = promisify(fs.readFile)

const RootElement: React.FC = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export const renderRoute: RequestHandler = async (_, res): Promise<void> => {

  const html = await readFile(path.resolve(__dirname, '../../dist/client/base.html'), 'utf-8')
  const [head, tail] = html.split('{content}')

  res.write(head)

  renderToNodeStream(<RootElement />)
  .on("end", () => {
    const [first, last] = tail.split('{store}')
    res.write(first)
    res.write(`
    window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(
      /</g,
      '\\u003c'
      )}
    `)
    res.write(last)
    res.end()
  })
  .pipe(res)
}
