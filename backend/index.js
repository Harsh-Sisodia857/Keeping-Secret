const express = require('express');
const port = 5000;
const app = express();
const db = require('./config/mongoose')
var cors = require('cors') 

app.use(express.json())

app.use(cors())

app.use('/', require('./routes/index'))

app.listen(port, function () {
    console.log(`Server is listening at port ${port}`);
})