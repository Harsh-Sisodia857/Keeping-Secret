const express = require('express');
const port = 5000;
const app = express();
const db = require('./config/mongoose')
const dotenv = require('dotenv')
var cors = require('cors') 

app.use(express.json())

app.use(cors())
dotenv.config({ path: "./config/config.env" })
app.use('/', require('./routes/index'))

app.listen(port, function () {
    console.log(`Server is listening at port ${port}`);
})