let net = require('net'); // 引入網路(Net)模組
let fs = require('fs');
let configfilePath = './config.json';
let configJsonFile = fs.readFileSync(configfilePath, 'utf8'); //read config.json file
let configJson = JSON.parse(configJsonFile); //parse coonfig.json file
let serverPort = configJson.scoketWebServerPort;
let serverIp = configJson.socketWebServerIP;
class Client {
    constructor() {
        console.log("start connect server");
        this.socket = new net.Socket();
        this.address = serverIp;
        this.port = serverPort;
        this.init();
    }
    init() {
        var client = this;
        client.socket.connect(client.port, client.address, () => {
            console.log(`Client connected to: ${client.address} :  ${client.port}`);
        });
        client.socket.on('close', () => {
            console.log('Client closed');
        });
    }
    sendMessage(message) {
        let client = this;
        return new Promise((resolve, reject) => {
            client.socket.write(message);
            client.socket.on('data', (data) => {
                resolve(data);
            });
            client.socket.on('error', (err) => {
                reject(err);
            });
        });
    }
}
let client = new Client();
module.exports = client;
