

let fs = require('fs');
let configfilePath = '../config.json';
let configJsonFile = fs.readFileSync(configfilePath, 'utf8');//read config.json file
let configJson = JSON.parse(configJsonFile);//parse coonfig.json file
let webserverPort = configJson.scoketWebServerPort;
let webserverIp = configJson.socketWebServerIP;

const net = require('net');


class Server {
    constructor() {
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

            });

            sock.on('close', () => {
                console.log(`connection from ${clientName} closed`);
            });

            sock.on('error', (err) => {
                console.log(`Connection ${clientName} error: ${err.message}`);
            });
        }

        server.connection = net.createServer(onClientConnected);

        server.connection.listen(webserverPort, webserverIp, function () {
            console.log(`Server started at: ${webserverIp}:${webserverPort}`);
        });
    }
}



new Server();
