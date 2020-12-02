const router = require('express').Router()
const userController = require('../controllers/user')

router.get('/', function (req, res) {
  res.json({
    status: 'API Works'
  })
})

router.get('/users', userController.getUsers)
router.put('/user/:id', userController.updateUser)

module.exports = router
