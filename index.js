//This file starts the server using Express.  
var express = require('express');
var port = process.env.PORT;
var app = express();
app.use(express.static(__dirname)
app.listen(port);