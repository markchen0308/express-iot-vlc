let shell = require('shelljs');
let infoServer = require('../config'); //include config setting
let port = infoServer.listenPort;
let ip = infoServer.webserverIp;
function runshell() {
    shell.exec('curl -sL -X GET http://' + ip.toString() + ':' + port + '/vlc/gw/get/today/latest');
    shell.exec('sleep 0.1');
    console.log('');
    shell.exec('curl -sL -X GET http://' + ip.toString() + ':' + port + '/vlc/gw/get/today/after?seqid=5');
    shell.exec('sleep 0.1');
    console.log('');
    shell.exec('curl -sL -X GET http://' + ip.toString() + ':' + port + '/vlc/gw/get/today');
    shell.exec('sleep 0.1');
    console.log('');
    shell.exec('curl -sL -X GET http://' + ip.toString() + ':' + port + '/vlc/gw/get/yesterday');
    shell.exec('sleep 0.1');
    console.log('');
    //let cmd='curl -sL -X GET \"http://'+ip.toString()+':'+port+'/vlc/gw/get/date?year=2018&month=03&date=18\"';
    // console.log(cmd);
    shell.exec('curl -sL -X GET \"http://' + ip.toString() + ':' + port + '/vlc/gw/get/date?year=2018&month=03&date=18\"');
    shell.exec('sleep 0.1');
    console.log('');
    shell.exec('curl -sL -X POST http://' + ip.toString() + ':' + port + '/vlc/gw/post/reset/');
    shell.exec('sleep 0.1');
    console.log('');
    shell.exec('curl -sL -X POST -d \"brightness=100&driverId=1\" http://' + ip.toString() + ':' + port + '/vlc/gw/post/dimming/brightness/');
    shell.exec('sleep 0.1');
    console.log('');
    shell.exec('curl -sL -X POST -d \"brightness=100&driverId=1&colorTemperature=5000\" http://' + ip.toString() + ':' + port + '/vlc/gw/post/dimming/colorTemperature/');
    shell.exec('sleep 0.1');
    console.log('');
    shell.exec('curl -sL -X POST -d \"brightness=100&driverId=1&colorX=0.33&colorY=0.33\" http://' + ip.toString() + ':' + port + '/vlc/gw/post/dimming/colorXY/');
    shell.exec('sleep 0.1');
    console.log('');
}
runshell();
