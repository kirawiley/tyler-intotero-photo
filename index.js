const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const nodemailer = require('nodemailer')
const dotenv = require('dotenv').config()

app.use(bodyParser.json())

app.use(express.static('public'))

const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
})

app.post('/send', (req, res) => {
  if(!req.body.email || !req.body.message) {
    res.send('Error: empty fields')
  }
  else {
    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: 'Contacted from Tyler Intotero Photography',
      text: 'From: ' + req.body.email + ' ' + req.body.message
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.send('Email could not be sent: ' + error)
      }
      else {
        return res.send('Email has been sent!')
      }
    })
  }
})


app.listen(3000, () => {
  console.log('Listening on port 3000!')
})
