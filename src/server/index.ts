import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import express from 'express'
import React from 'react';
import { renderToNodeStream } from "react-dom/server";

import { HelloWorld } from '../components/app';

const port = process.env.PORT || 8080

const app = express()

const readFile = promisify(fs.readFile);

app.get('*', async (_, res) => {

  const html = await readFile(path.resolve(__dirname, '../../dist/client/base.html'), 'utf-8');
  const [head, tail] = html.split("{content}");

  res.write(head);

  const rootElement = React.createElement(HelloWorld);

  renderToNodeStream(rootElement)
    .on("end", () => {
      res.write(tail);
      res.end();
    })
    .pipe(res)

})

app.use(express.static(path.join(__dirname, "./../../dist/client")));

app.listen(port, () => console.log(`app listening on port ${port}!`))
