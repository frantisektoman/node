var port = 3000;
var app = require('express')()
, server = require('http').createServer(app)
, io = require('socket.io').listen(server);

server.listen(port);
console.log("server runing on port " + port);

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
    socket.on('getRandom', function (data) {
        socket.emit('random', {
            random: Math.random()
        });
    });
});