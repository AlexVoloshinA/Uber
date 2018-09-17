const express = require('express');
const app = express();
const router = require('./routes/routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nuber', {useNewUrlParser: true}, () => {
    console.log('Connected');
    
})


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/api', router);



app.listen(3050, () => {
    console.log(`Listening on the 3050 port .... `);
})