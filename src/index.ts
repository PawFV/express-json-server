/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @file Mounts an Express http server.
 * @author PawFV <https://github.com/PawFV>
 */
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
const app = express()
const port = 3000

app.use(cors() as any)
app.use(bodyParser.json())

// routes
app.use('/users', require('./routes/users'))

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`App listening on localhost:${port} port!`))