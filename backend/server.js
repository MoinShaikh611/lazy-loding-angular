const express = require('express');
const api = require('./routes/api')
const PORT = 3000;
const app = express();
const routes = require('./routes/api')

app.use(express.json())

app.use('/api',api)
app.use('/',routes)


app.listen(PORT,() =>{
    console.log(`localhost:3000`)
})