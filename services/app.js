const express = require('express');
const app = express();
const movieDetails = require('./route');
var cors = require('cors');
app.use(cors());

app.use('/', movieDetails);

app.listen(500, () => {
    console.log('server listening on 500')
})