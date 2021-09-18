const express = require('express')
const app = express()
const port = process.env.port || 3000
const { sendVerificationCode, verifyCode } = require('./sms-verify')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/verify-sms', async (req, res) => {
  let data = {}

  sendVerificationCode().then(res => {
    console.log(JSON.parse(res))
    data = res
  })
  .catch(err => {
    console.log(err)
  })

  res.send()
})

app.get('/verify-code', async (req, res) => {
  let data = {}

  verifyCode('68543')

  res.send('verify-code')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
