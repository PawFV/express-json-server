/**
 * @file Mounts an Express http server.
 * @author PawFV <https://github.com/PawFV>
 */
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

// routes
app.use('/users', require('./routes/users'))

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`App listening on localhost:${port} port!`))
