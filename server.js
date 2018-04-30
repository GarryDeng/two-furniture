var express = require('express'),
    http = require('http'),
    app = express(),
    server = http.createServer(app);
    app.use('/', express.static(__dirname));
    server.listen(7575);
    console.log(7575)
