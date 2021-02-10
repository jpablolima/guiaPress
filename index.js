const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/connection')

PORT = 3000;



app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// Connection in DataBase

connection
    .authenticate()
    .then(() => {
        console.log('connection successful');
    }).catch((error) => {
        console.log(error)
    });


app.get('/', (req, res) => {
    res.render('index');
});


app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
});