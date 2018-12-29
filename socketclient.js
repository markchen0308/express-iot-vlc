"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let net = require('net'); // 引入網路(Net)模組
let infoServer = require('./config'); //include config setting
let serverPort = infoServer.scoketServerPort;
let serverIp = infoServer.socketServerIP;
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
