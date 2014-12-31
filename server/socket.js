var WebSocketServer = require('ws').Server;

module.exports = function(config) {

    var wss = new WebSocketServer({
        port: config.socketPort
    });

    wss.on('connection', function(ws) {
        console.log('user connected');
        ws.on('message', function(data) {
            var msg = JSON.parse(data);
            console.log(msg);
        });
    });


};