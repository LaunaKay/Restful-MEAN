var express = require('express');
var app = express();

var server = app.listen(8888, function()
{
    console.log("Express server listening on port 8888");
});

var path=require('path');

// Body Parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static(__dirname + '/client'))

// Mongoose
require('./server/config/mongoose.js');

//HTTP Routes
require('./server/config/routes.js')(app);