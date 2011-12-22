var express = require('express');
var app = express.createServer();
app.use(express.static(__dirname));

app.listen(8080);
console.log('http://localhost:8080/');

// then just pass the server app handle to .listen()!

var dnode = require('dnode');
var server = dnode({
    zing : function (n, cb) { cb(n * 100) }
});
server.listen(app);