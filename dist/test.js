var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let shell = require('shelljs');
let infoServer = require('../config'); //include config setting
let port = infoServer.webserverPort;
let ip = infoServer.webserverIp;
let CT_MIN = 3000;
let CT_MAX = 5500;
let CT_STEP = 500;
let DELAY_CT = 100;
let LightIdArry = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let INTERVAL_CT = LightIdArry.length * DELAY_CT + 1000;
let CT = CT_MIN;
let cmd;
//delay function
function delay(msec) {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(true); }, msec);
    });
}
//---------------------------------------------------------------------------
function runDimCT() {
    setInterval(() => {
        //DimmingCT_ModeCircle();
        DimmingCT_All();
    }, INTERVAL_CT);
}
//--------------------------------------------------------------------------
function DimmingCT_ModeCircle() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < LightIdArry.length; i++) {
            cmd = 'curl -sL -X POST -d \"brightness=100&driverId=' + LightIdArry[i].toString() + '&colorTemperature=' + CT.toString() + '\" http://' + ip.toString() + ':' + port + '/vlc/gw/post/dimming/colorTemperature/';
            console.log(cmd);
            shell.exec(cmd);
            console.log('');
            yield delay(DELAY_CT);
        }
        if (CT < CT_MAX) {
            CT += 500;
        }
        else {
            CT = CT_MIN;
        }
    });
}
//--------------------------------------------------------------------------
function DimmingCT_All() {
    return __awaiter(this, void 0, void 0, function* () {
        cmd = 'curl -sL -X POST -d \"brightness=100&driverId=255&colorTemperature=' + CT.toString() + '\" http://' + ip.toString() + ':' + port + '/vlc/gw/post/dimming/colorTemperature/';
        console.log(cmd);
        shell.exec(cmd);
        console.log('');
        if (CT < CT_MAX) {
            CT += 500;
        }
        else {
            CT = CT_MIN;
        }
    });
}
//-------------------------------------------------------------------------------------------------
function queryLast() {
    cmd = 'curl -sL -X GET http://' + ip.toString() + ':' + port + '/vlc/gw/get/today/latest';
    console.log(cmd);
    shell.exec(cmd);
    console.log('');
}
//-------------------------------------------------------------------------
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
    shell.exec('curl -sL -X POST -d \"brightness=100&driverId=1&colorTemperature=3000\" http://' + ip.toString() + ':' + port + '/vlc/gw/post/dimming/colorTemperature/');
    shell.exec('sleep 0.1');
    console.log('');
    shell.exec('curl -sL -X POST -d \"brightness=100&driverId=2&colorTemperature=3000\" http://' + ip.toString() + ':' + port + '/vlc/gw/post/dimming/colorTemperature/');
    shell.exec('sleep 0.1');
    console.log('');
    shell.exec('curl -sL -X POST -d \"brightness=100&driverId=3&colorTemperature=3000\" http://' + ip.toString() + ':' + port + '/vlc/gw/post/dimming/colorTemperature/');
    shell.exec('sleep 0.1');
    console.log('');
    shell.exec('curl -sL -X POST -d \"brightness=100&driverId=4&colorTemperature=3000\" http://' + ip.toString() + ':' + port + '/vlc/gw/post/dimming/colorTemperature/');
    shell.exec('sleep 0.1');
    console.log('');
    shell.exec('curl -sL -X POST -d \"brightness=100&driverId=5&colorTemperature=3000\" http://' + ip.toString() + ':' + port + '/vlc/gw/post/dimming/colorTemperature/');
    shell.exec('sleep 0.1');
    console.log('');
    shell.exec('curl -sL -X POST -d \"brightness=100&driverId=6&colorTemperature=3000\" http://' + ip.toString() + ':' + port + '/vlc/gw/post/dimming/colorTemperature/');
    shell.exec('sleep 0.1');
    console.log('');
    shell.exec('curl -sL -X POST -d \"brightness=100&driverId=7&colorTemperature=3000\" http://' + ip.toString() + ':' + port + '/vlc/gw/post/dimming/colorTemperature/');
    shell.exec('sleep 0.1');
    console.log('');
    shell.exec('curl -sL -X POST -d \"brightness=100&driverId=8&colorTemperature=3000\" http://' + ip.toString() + ':' + port + '/vlc/gw/post/dimming/colorTemperature/');
    shell.exec('sleep 0.1');
    console.log('');
    shell.exec('curl -sL -X POST -d \"brightness=100&driverId=9&colorTemperature=3000\" http://' + ip.toString() + ':' + port + '/vlc/gw/post/dimming/colorTemperature/');
    shell.exec('sleep 0.1');
    console.log('');
    //shell.exec('curl -sL -X POST -d \"brightness=100&driverId=2&colorX=0.33&colorY=0.33\" http://' + ip.toString() + ':' + port + '/vlc/gw/post/dimming/colorXY/');
    //shell.exec('sleep 0.1');
    //console.log('');
}
//runshell();
//runDimCT();
queryLast();
