const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const port = 8000

app.get('/users', (req, res) => {
  res.send([
    {
      id: 1,
      username: 'hammad',
      name: 'Hammad Khalid',
      email: 'hammad.khalid@gigalabs.co',
      phone: '+92-315-446-8944',
      website: 'http://gigalabs.co',
      address: {
        street: 'Address line 1',
        suite: 'Address line 2',
        city: 'Test',
        zipcode: 1234
      },
      company: {
        name: 'Gigalabs'
      },
      favored: false
    },
    {
      id: 2,
      username: 'zeeshan',
      name: 'Zeeshan Imran',
      email: 'zeeshan@gigalabs.co',
      phone: '+92-315-446-8944',
      website: 'http://gigalabs.co',
      address: {
        street: 'Address line 1',
        suite: 'Address line 2',
        city: 'Test',
        zipcode: 1234
      },
      company: {
        name: 'Gigalabs'
      },
      favored: false
    },
    {
      id: 3,
      username: 'asfand',
      name: 'Asfand Yar',
      email: 'asfand@gigalabs.co',
      phone: '+92-315-446-8944',
      website: 'http://gigalabs.co',
      address: {
        street: 'Address line 1',
        suite: 'Address line 2',
        city: 'Test',
        zipcode: 1234
      },
      company: {
        name: 'Gigalabs'
      },
      favored: false
    },
    {
      id: 4,
      username: 'abdullah',
      name: 'Abdullah Warraich',
      email: 'abdullah@gigalabs.co',
      phone: '+92-315-446-8944',
      website: 'http://gigalabs.co',
      address: {
        street: 'Address line 1',
        suite: 'Address line 2',
        city: 'Test',
        zipcode: 1234
      },
      company: {
        name: 'Gigalabs'
      },
      favored: false
    },
    {
      id: 5,
      username: 'mustafa',
      name: 'Mustafa Ali',
      email: 'mustafa.ali@gigalabs.co',
      phone: '+92-315-446-8944',
      website: 'http://gigalabs.co',
      address: {
        street: 'Address line 1',
        suite: 'Address line 2',
        city: 'Test',
        zipcode: 1234
      },
      company: {
        name: 'Gigalabs'
      },
      favored: false
    },
    {
      id: 6,
      username: 'wajid',
      name: 'Wajid Shabbir',
      email: 'wajid@gigalabs.co',
      phone: '+92-315-446-8944',
      website: 'http://gigalabs.co',
      address: {
        street: 'Address line 1',
        suite: 'Address line 2',
        city: 'Test',
        zipcode: 1234
      },
      company: {
        name: 'Gigalabs'
      },
      favored: false
    },
    {
      id: 7,
      username: 'afzaal',
      name: 'Afzaal Ahmad',
      email: 'afzaal@gigalabs.co',
      phone: '+92-315-446-8944',
      website: 'http://gigalabs.co',
      address: {
        street: 'Address line 1',
        suite: 'Address line 2',
        city: 'Test',
        zipcode: 1234
      },
      company: {
        name: 'Gigalabs'
      },
      favored: false
    },
    {
      id: 8,
      username: 'danyal',
      name: 'Muhammad Danyal',
      email: 'danyal@gigalabs.co',
      phone: '+92-315-446-8944',
      website: 'http://gigalabs.co',
      address: {
        street: 'Address line 1',
        suite: 'Address line 2',
        city: 'Test',
        zipcode: 1234
      },
      company: {
        name: 'Gigalabs'
      },
      favored: false
    }
  ])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
