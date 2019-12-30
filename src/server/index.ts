import path from 'path'
import express from 'express'
import { renderRoute } from './render.route'

const port = process.env.PORT || 8080

const app = express()

app.use(express.static(path.join(__dirname, "./../../dist/client")))

app.get('*', renderRoute)

app.listen(port, () => console.log(`app listening on port ${port}!`))
