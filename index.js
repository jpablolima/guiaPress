const express = require('express');

const app = express();

PORT = 3000;

app.get('/', (req, res) => {
    res.send('Server running in port 3000');
});


app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
});