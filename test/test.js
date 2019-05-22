let shell = require('shelljs');
let infoServer = require('../config'); //include config setting
let port = infoServer.webserverPort;
let ip = infoServer.webserverIp;

function runshell() {
   // shell.exec('curl -sL -X GET http://' + ip.toString() + ':' + port + '/vlc/gw/get/today/latest');
  //  shell.exec('sleep 0.1');
   // console.log('');

   // shell.exec('curl -sL -X GET http://' + ip.toString() + ':' + port + '/vlc/gw/get/today/after?seqid=5');
   // shell.exec('sleep 0.1');
  //  console.log('');
    
   // shell.exec('curl -sL -X GET http://' + ip.toString() + ':' + port + '/vlc/gw/get/today');
  // shell.exec('sleep 0.1');
  // console.log('');

   //shell.exec('curl -sL -X GET http://' + ip.toString() + ':' + port + '/vlc/gw/get/yesterday');
    //shell.exec('sleep 0.1');
    //console.log('');

    //let cmd='curl -sL -X GET \"http://'+ip.toString()+':'+port+'/vlc/gw/get/date?year=2019&month=03&date=17\"';
     //console.log(cmd);
   
   // shell.exec('curl -sL -X GET \"http://' + ip.toString() + ':' + port + '/vlc/gw/get/date?year=2019&month=01&date=18\"');
   // shell.exec('sleep 0.1');
  //  console.log('');

   // shell.exec('curl -sL -X POST http://' + ip.toString() + ':' + port + '/vlc/gw/post/reset/');
   // shell.exec('sleep 0.1');
   // console.log('');

    //shell.exec('curl -sL -X POST -d \"brightness=100&driverId=2\" http://' + ip.toString() + ':' + port + '/vlc/gw/post/dimming/brightness/');
    //shell.exec('sleep 0.1');
    //console.log('');
    var color=5000;
    shell.exec('curl -sL -X POST -d \"brightness=100&driverId=255&colorTemperature=3000\" http://' + ip.toString() + ':' + port + '/vlc/gw/post/dimming/colorTemperature/');
    shell.exec('sleep 0.3');
    console.log('');
/*
    shell.exec('curl -sL -X POST -d \"brightness=100&driverId=2&colorTemperature=3000\" http://' + ip.toString() + ':' + port + '/vlc/gw/post/dimming/colorTemperature/');
    shell.exec('sleep 0.3');
    console.log('');

    shell.exec('curl -sL -X POST -d \"brightness=100&driverId=3&colorTemperature=3000\" http://' + ip.toString() + ':' + port + '/vlc/gw/post/dimming/colorTemperature/');
    shell.exec('sleep 0.3');
    console.log('');

    shell.exec('curl -sL -X POST -d \"brightness=100&driverId=4&colorTemperature=3000\" http://' + ip.toString() + ':' + port + '/vlc/gw/post/dimming/colorTemperature/');
    shell.exec('sleep 0.3');
    console.log('');

    shell.exec('curl -sL -X POST -d \"brightness=100&driverId=5&colorTemperature=3000\" http://' + ip.toString() + ':' + port + '/vlc/gw/post/dimming/colorTemperature/');
    shell.exec('sleep 0.3');
    console.log('');

    shell.exec('curl -sL -X POST -d \"brightness=100&driverId=6&colorTemperature=3000\" http://' + ip.toString() + ':' + port + '/vlc/gw/post/dimming/colorTemperature/');
    shell.exec('sleep 0.3');
    console.log('');

    shell.exec('curl -sL -X POST -d \"brightness=100&driverId=7&colorTemperature=3000\" http://' + ip.toString() + ':' + port + '/vlc/gw/post/dimming/colorTemperature/');
    shell.exec('sleep 1');
    console.log('');

    shell.exec('curl -sL -X POST -d \"brightness=100&driverId=8&colorTemperature=3000\" http://' + ip.toString() + ':' + port + '/vlc/gw/post/dimming/colorTemperature/');
    shell.exec('sleep 1');
    console.log('');

    shell.exec('curl -sL -X POST -d \"brightness=100&driverId=9&colorTemperature=3000\" http://' + ip.toString() + ':' + port + '/vlc/gw/post/dimming/colorTemperature/');
    shell.exec('sleep 0.1');
    console.log('');
    
    //shell.exec('curl -sL -X POST -d \"brightness=100&driverId=2&colorX=0.33&colorY=0.33\" http://' + ip.toString() + ':' + port + '/vlc/gw/post/dimming/colorXY/');
    //shell.exec('sleep 0.1');
    //console.log('');
    */
}
runshell();
