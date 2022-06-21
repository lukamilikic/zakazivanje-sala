const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

app.post('/create-user', (req, res) => {
  res.send({
    message: 'You successfully created a new user!'
  })
})

app.listen(process.env.port || 3000)
