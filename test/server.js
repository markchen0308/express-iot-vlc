

let infoServer = require('../config'); //include config setting
let webserverPort = infoServer.scoketServerPort;
let webserverIp = infoServer.socketServerIP;

const net = require('net');

 
class Server {
 constructor() {
 // this.port =  webserverPort;
 // this.address =  webserverIp;
  
  this.init();
 }
 
 init() {
  let server = this;
 
  let onClientConnected = (sock) => {
 
   let clientName = `${sock.remoteAddress}:${sock.remotePort}`;
   console.log(`new client connected: ${clientName}`);
 
   sock.on('data', (data) => {
    console.log(`${clientName} Says: ${data}`);
    sock.write(data);
    //sock.write('exit');
   });
 
   sock.on('close', () => {
    console.log(`connection from ${clientName} closed`);
   });
 
   sock.on('error', (err) => {
    console.log(`Connection ${clientName} error: ${err.message}`);
   });
  }
 
  server.connection = net.createServer(onClientConnected);
 
  server.connection.listen(webserverPort, webserverIp, function() {
   console.log(`Server started at: ${webserverIp}:${webserverPort}`);
  });
 }
}



new Server();
