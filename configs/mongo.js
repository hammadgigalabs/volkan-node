const mongoose = require('mongoose')

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (err) {
      console.error('Can not connect to MongoDb.')
      process.exit()
    }
    console.log('MongoDb: Connected!')
  }
)
