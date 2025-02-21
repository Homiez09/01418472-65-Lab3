const express = require('express')
const app = express()
const port = 8000

app.get('/hello-world', (req, res) => {
  res.send('Phumrapee-Soenvanichakul-6510405750')
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})