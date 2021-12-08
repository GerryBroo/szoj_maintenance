const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');

app.set('view engine', 'ejs');
app.use(express.static('bootstrap'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(
    session({
        secret: 'secret'
    })
);

// Load routing
require('./route/routes')(app);

app.use((err, req, res, next) => {
    res.end('Problem...');
    console.log(err);
});

var servert = app.listen(3000, function () {
    console.log("On: 3000");
});