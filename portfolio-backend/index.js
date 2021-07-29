const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.static('build'))

app.get('/', (req, res) => {
    res.status(200)
})

app.get('/api/resume', (req, res) => {
    const file = `${__dirname}/Resume.pdf`
    res.download(file)
})

app.listen(PORT, () => {
    console.log(PORT)
})