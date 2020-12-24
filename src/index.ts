/**
 * @file Mounts an Express http server.
 * @author PawFV <https://github.com/PawFV>
 */
import cors = require('cors')
import express from 'express'
import { apiCall } from './fetch'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

// routes
// eslint-disable-next-line @typescript-eslint/no-var-requires
app.use('/users', require('./routes/users'))

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`App listening on localhost:${port} port!`))

apiCall.getUsers().then(({ data }) => console.log(data))
