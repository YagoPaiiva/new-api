const express = require('express');
const cors = require('cors');
const Router = require('./Router');

require('dotenv').config();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}))

app.use('/api', Router)

module.exports = app;