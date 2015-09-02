var express = require('express');
var app = express();

// Figure how to run high port on AWS
var port = process.env.PORT || 1337;

app.use(express.static(__dirname + '/public'));

app.listen(port);
console.log("Node server running on port " + port);