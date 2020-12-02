const { ObjectId } = require('mongodb')
const User = require('../models/user')

exports.getUsers = (req, res) => {
  User.find({}, (err, users) => {
    if (err)
      res.json({
        status: 'error',
        message: err
      })

    res.json(
      users.map(u => {
        return {
          id: u._id.toString(),
          address: u.address,
          company: u.company,
          favored: u.favored,
          username: u.username,
          name: u.name,
          email: u.email,
          phone: u.phone,
          website: u.website,
          created_at: u.created_at
        }
      })
    )
  })
}

exports.updateUser = async (req, res) => {
  try {
    const { user } = req.body
    await User.updateOne(
      {
        _id: new ObjectId(user.id.toString())
      },
      {
        $set: {
          name: user.name,
          email: user.email,
          favored: user.favored,
          phone: user.phone,
          website: user.website
        }
      }
    )
    return res.json({
      success: true
    })
  } catch (e) {
    return res.json({
      status: 'error',
      message: err
    })
  }
}
