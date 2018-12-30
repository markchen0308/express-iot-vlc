var express = require('express');
var router = express.Router();
let socketClient = require('../socketclient');

let getTodaylastest = 1;
let getTodayAfter = 2;
let getToday = 3;
let getYesterday = 4;
let getDate = 5;
let postReset = 6;
let postDimingBrightness = 7;
let postDimingCT = 8;
let postDimingXY=9;
let msgError = 404;




//------------------------------------------------------------------
router.get('/get/today/latest', (req, res, next) => {
  let cmd =
  {
    cmdtype: getTodaylastest,
    cmdData: {}
  }
  socketClient.sendMessage(JSON.stringify(cmd))
    .then((data) => {
      console.log('Received:' + data);
      res.send(data);
    })
});

//-------------------------------------------------------------------
router.get('/get/today/after', (req, res, next) => {
  let seqid = req.query.seqid;
  if (Boolean(seqid)) {
    let cmd =
    {
      cmdtype: getTodayAfter,
      cmdData: { seqid: seqid }
    }

    socketClient.sendMessage(JSON.stringify(cmd))
      .then((data) => {
        console.log('Received:' + data);
        res.send(data);
      })
  }
  else {
    let cmd =
    {
      cmdtype: msgError,
      cmdData: { msg: "parameter error" }
    }
    res.send(JSON.stringify(cmd));
  }
});

//----------------------------------------------------------------------
router.get('/get/today', (req, res, next) => {
  let cmd =
  {
    cmdtype: getToday,
    cmdData: {}
  }
  socketClient.sendMessage(JSON.stringify(cmd))
    .then((data) => {
      console.log('Received:' + data);
      res.send(data);
    })
});

//----------------------------------------------------------------------
router.get('/get/yesterday', (req, res, next) => {
  let cmd =
  {
    cmdtype: getYesterday,
    cmdData: {}
  }
  socketClient.sendMessage(JSON.stringify(cmd))
    .then((data) => {
      console.log('Received:' + data);
      res.send(data);
    })
});

//----------------------------------------------------------------------
router.get('/get/date', (req, res, next) => {
  let year = req.query.year;
  let month = req.query.month;
  let date = req.query.date;

  if (Boolean(year) && Boolean(month) && Boolean(date)) {
    let cmd =
    {
      cmdtype: getDate,
      cmdData: { year: year, month: month, date: date }
    }

    socketClient.sendMessage(JSON.stringify(cmd))
      .then((data) => {
        console.log('Received:' + data);
        res.send(data);
      })
  }
  else {
    let cmd =
    {
      cmdtype: msgError,
      cmdData: { msg: "parameter error" }
    }
    res.send(JSON.stringify(cmd));
  }
});

//------------------------------------------------------------------------
router.post('/post/reset', (req, res, next) => {
  let cmd =
  {
    cmdtype: postReset,
    cmdData: {}
  }
  socketClient.sendMessage(JSON.stringify(cmd))
    .then((data) => {
      console.log('Received:' + data);
      res.send(data);
    })
})
//------------------------------------------------------------------------
router.post('/post/dimming/brightness/', (req, res, next) => {
  let brightness = req.body.brightness;
  let driverId = req.body.driverId;
  if (Boolean(brightness) && Boolean(driverId)) {
    let cmd =
    {
      cmdtype: postDimingBrightness,
      cmdData: { brightness: brightness, driverId: driverId }
    }
    socketClient.sendMessage(JSON.stringify(cmd))
      .then((data) => {
        console.log('Received:' + data);
        res.send(data);
      })
  }
  else {
    res.send('error');
  }
})

//--------------------------------------------------------------------------
router.post('/post/dimming/colorTemperature/', (req, res, next) => {
  let brightness = req.body.brightness;
  let driverId = req.body.driverId;
  let colorTemperature = req.body.colorTemperature;
  if (Boolean(brightness) && Boolean(driverId) && Boolean(colorTemperature)) {
    let cmd =
    {
      cmdtype: postDimingCT,
      cmdData: { brightness: brightness, driverId: driverId, CT: colorTemperature }
    }
    socketClient.sendMessage(JSON.stringify(cmd))
      .then((data) => {
        console.log('Received:' + data);
        res.send(data);
      })
  }
  else {
    res.send('error');
  }
})

//---------------------------------------------------------------------------
router.post('/post/dimming/colorXY/', (req, res, next) => {
  let brightness = req.body.brightness;
  let driverId = req.body.driverId;
  let colorX = req.body.colorX;
  let colorY = req.body.colorY;

  if (Boolean(brightness) && Boolean(driverId) && Boolean(colorX) && Boolean(colorY)) {
    let cmd =
    {
      cmdtype: postDimingXY,
      cmdData: { brightness: brightness, driverId: driverId, colorX: colorX, colorY:colorY}
    }
    socketClient.sendMessage(JSON.stringify(cmd))
      .then((data) => {
        console.log('Received:' + data);
        res.send(data);
      })
  }
  else {
    res.send('error');
  }
})

module.exports = router;
