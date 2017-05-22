var mosca = require('mosca');


var settings = {
  type: 'mqtt',
  json: false,
  mqtt: require('mqtt'),
  host: '127.0.0.1',
  port: process.env.PORT || 1883
};

var server = new mosca.Server(settings);


server.on('clientConnected', function(client) {
    console.log('client connected');
});
server.on('clientDisconnecting', function(client) {
    console.log('client clientDisconnecting');
});
server.on('clientDisconnected', function(client) {
    console.log('client clientDisconnected');
});

 //fired when a message is received
//server.on('published', function(packet, client) {
  //console.log('Published', packet.payload);
//});

server.on('ready', setup);

// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running');
}
