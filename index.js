const express = require('express')
const cors = require('cors')
const userController = require('./controllers/user')
const app = express()
app.use(cors())
const port = 8000

app.get('/users', (req, res) => {
  // Adding intential delay for loader to appear
  setTimeout(function () {
    res.send(userController.getUsers())
  }, 2000)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
