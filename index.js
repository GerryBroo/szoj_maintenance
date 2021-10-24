var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('static'));

// Load routing
require('./route/routes')(app);

var servert = app.listen(3000, function () {
    console.log("On: 3000");
});