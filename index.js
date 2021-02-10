const express = require('express');
const app = express();
const bodyParser = require('body-parser');

PORT = 3000;


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.render('index');
});


app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
});