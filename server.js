const express = require('express')
const app = express()
const PORT = 3333
const path = require('path')

app.use(express.static(path.join(__dirname, 'web')))

app.listen(PORT, () => console.log(`App listenin' on port ${PORT}`))