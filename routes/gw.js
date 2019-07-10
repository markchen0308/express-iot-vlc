var express = require('express');
var router = express.Router();
let socketClient = require('../socketclient');
var webCmd;
(function (webCmd) {
    webCmd[webCmd["getTodaylast"] = 1] = "getTodaylast";
    webCmd[webCmd["getTodayAfter"] = 2] = "getTodayAfter";
    webCmd[webCmd["getToday"] = 3] = "getToday";
    webCmd[webCmd["getYesterday"] = 4] = "getYesterday";
    webCmd[webCmd["getDate"] = 5] = "getDate";
    webCmd[webCmd["postReset"] = 6] = "postReset";
    webCmd[webCmd["postDimingBrightness"] = 7] = "postDimingBrightness";
    webCmd[webCmd["postDimingCT"] = 8] = "postDimingCT";
    webCmd[webCmd["postDimingXY"] = 9] = "postDimingXY";
    webCmd[webCmd["msgError"] = 404] = "msgError";
})(webCmd || (webCmd = {}));
//------------------------------------------------------------------
router.get('/get/today/latest', (req, res, next) => {
    let cmd = {
        cmdtype: webCmd.getTodaylast,
        cmdData: {}
    };
    socketClient.sendMessage(JSON.stringify(cmd))
        .then((data) => {
        //console.log('Received:' + data);
        res.send(data);
    });
});
//-------------------------------------------------------------------
router.get('/get/today/after', (req, res, next) => {
    let seqid = req.query.seqid;
    if (Boolean(seqid)) {
        let cmd = {
            cmdtype: webCmd.getTodayAfter,
            cmdData: { seqid: seqid }
        };
        socketClient.sendMessage(JSON.stringify(cmd))
            .then((data) => {
            //console.log('Received:' + data);
            res.send(data);
        });
    }
    else {
        let cmd = {
            cmdtype: webCmd.msgError,
            cmdData: { msg: "parameter error" }
        };
        res.send(JSON.stringify(cmd));
    }
});
//----------------------------------------------------------------------
router.get('/get/today', (req, res, next) => {
    let cmd = {
        cmdtype: webCmd.getToday,
        cmdData: {}
    };
    socketClient.sendMessage(JSON.stringify(cmd))
        .then((data) => {
        //console.log('Received:' + data);
        res.send(data);
    });
});
//----------------------------------------------------------------------
router.get('/get/yesterday', (req, res, next) => {
    let cmd = {
        cmdtype: webCmd.getYesterday,
        cmdData: {}
    };
    socketClient.sendMessage(JSON.stringify(cmd))
        .then((data) => {
        //console.log('Received:' + data);
        res.send(data);
    });
});
//----------------------------------------------------------------------
router.get('/get/date', (req, res, next) => {
    let year = req.query.year;
    let month = req.query.month;
    let date = req.query.date;
    if (Boolean(year) && Boolean(month) && Boolean(date)) {
        let cmd = {
            cmdtype: webCmd.getDate,
            cmdData: { year: year, month: month, date: date }
        };
        socketClient.sendMessage(JSON.stringify(cmd))
            .then((data) => {
            //console.log('Received:' + data);
            res.send(data);
        });
    }
    else {
        let cmd = {
            cmdtype: webCmd.msgError,
            cmdData: { msg: "parameter error" }
        };
        res.send(JSON.stringify(cmd));
    }
});
//------------------------------------------------------------------------
router.post('/post/reset', (req, res, next) => {
    let cmd = {
        cmdtype: webCmd.postReset,
        cmdData: {}
    };
    socketClient.sendMessage(JSON.stringify(cmd))
        .then((data) => {
        //console.log('Received:' + data);
        res.send(data);
    });
});
//------------------------------------------------------------------------
router.post('/post/dimming/brightness/', (req, res, next) => {
    let brightness = req.body.brightness;
    let driverId = req.body.driverId;
    if (Boolean(brightness) && Boolean(driverId)) {
        let cmd = {
            cmdtype: webCmd.postDimingBrightness,
            cmdData: { brightness: brightness, driverId: driverId }
        };
        socketClient.sendMessage(JSON.stringify(cmd))
            .then((data) => {
            //console.log('Received:' + data);
            res.send(data);
        });
    }
    else {
        res.send('error');
    }
});
//--------------------------------------------------------------------------
router.post('/post/dimming/colorTemperature/', (req, res, next) => {
    let brightness = req.body.brightness;
    let driverId = req.body.driverId;
    let colorTemperature = req.body.colorTemperature;
    if (Boolean(brightness) && Boolean(driverId) && Boolean(colorTemperature)) {
        let cmd = {
            cmdtype: webCmd.postDimingCT,
            cmdData: { brightness: brightness, driverId: driverId, CT: colorTemperature }
        };
        socketClient.sendMessage(JSON.stringify(cmd))
            .then((data) => {
            //console.log('Received:' + data);
            res.send(data);
        });
    }
    else {
        res.send('error');
    }
});
//---------------------------------------------------------------------------
router.post('/post/dimming/colorXY/', (req, res, next) => {
    let brightness = req.body.brightness;
    let driverId = req.body.driverId;
    let colorX = req.body.colorX;
    let colorY = req.body.colorY;
    if (Boolean(brightness) && Boolean(driverId) && Boolean(colorX) && Boolean(colorY)) {
        let cmd = {
            cmdtype: webCmd.postDimingXY,
            cmdData: { brightness: brightness, driverId: driverId, colorX: colorX, colorY: colorY }
        };
        socketClient.sendMessage(JSON.stringify(cmd))
            .then((data) => {
            //console.log('Received:' + data);
            res.send(data);
        });
    }
    else {
        res.send('error');
    }
});
module.exports = router;
