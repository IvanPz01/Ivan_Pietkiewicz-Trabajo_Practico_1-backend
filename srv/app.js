const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.listen(process.env.PORT, () =>  {
    console.log(`El servidor esta prendido ${process.env.URL}:${process.env.PORT}`)
})