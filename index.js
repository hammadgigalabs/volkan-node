// Load Configs
require('./configs')

const cors = require('cors')
const express = require('express')
const apiRoutes = require('./routes')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT || 8080

// Use API routes in the App
app.use('/', apiRoutes)

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
})
