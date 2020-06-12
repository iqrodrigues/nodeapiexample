const express = require('express');
const userRoute = require('./routes/userRoutes')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded( {extended: false} ))

userRoute(app);

app.get('/', (req, res) => {
    res.send('Olá mundo')
})

app.listen(3000, () => console.log('App rodnado na porta 3k'))