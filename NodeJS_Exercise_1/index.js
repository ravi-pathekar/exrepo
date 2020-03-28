const mongoose = require('mongoose');
const cors = require('cors'); 
const express = require('express');    
const app = express();

const table = require('./routes/tables');

app.use(express.json());
app.use(cors({
    credentials: true
}));
app.use('/', table);

mongoose.connect('mongodb://localhost/nodeexercise')
    .then(() => console.log('Connected....'))
    .catch((err) => console.log('Not Connected....', err.message));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}....`));