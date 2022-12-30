const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
var router = require('./router.js');
app.use('/',router);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(9000, () => {
    console.log('listening on port %s...', server.address().port);
});