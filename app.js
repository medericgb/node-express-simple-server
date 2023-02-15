const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'public') });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app