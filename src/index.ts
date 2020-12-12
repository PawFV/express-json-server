/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @file Mounts an Express http server.
 * @author PawFV <https://github.com/PawFV>
 */
import express from 'express'
const app = express()
const port = 3000
import cors from 'cors'
import bodyParser from 'body-parser'

app.use(cors())
app.use(bodyParser.json())

// routes
app.use('/users', require('./routes/users'))

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`App listening on localhost:${port} port!`))
