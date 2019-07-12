let shell = require('shelljs');
let infoServer = require('../config'); //include config setting
let port = infoServer.webserverPort;
let ip = infoServer.webserverIp;

maxColor=5500;
minColor=3000;
minBright=10;
maxBright=100;

function tuneBrightColor(id,brightness,color)
{
    shell.exec('curl -sL -X POST -d \"brightness='+brightness+'&driverId='+id+'&colorTemperature='+color+'\" http://' + ip.toString() + ':' + port + '/vlc/gw/post/dimming/colorTemperature/');
}
//--------------------------- cycle color from min color to max color per 1 second----------------------------------------------//
function runCycleColorAll() {
    timeCycle=1000;//1s
    id=255;//for all
    brightness=maxBright;//10~100%
    color=minColor;
    colorStep=500;
    direction=0;
    setInterval(()=>{
        tuneBrightColor(id,brightness,color);
        if(direction==0)
        {
            if((color<maxColor))
            {
                color+=colorStep
            }
            else
            {
                direction=1;
                color-=colorStep;
            }
        }
        else
        {
            if((color>minColor))
            {
                color-=colorStep
            }
            else
            {
                direction=0;
                color+=colorStep;
            }
        }
    },timeCycle)
}
//--------------------------- cycle brightness from min brightness to max brightness per 1 second----------------------------------------------//
function runCycleBrightAll() {
    timeCycle=1000;//1s
    id=255;//for all
    brightness=minBright;//10~100%
    brightStep=5;
    color=maxColor;
    
    direction=0;
    setInterval(()=>{
        tuneBrightColor(id,brightness,color);
        if(direction==0)
        {
            if((brightness<maxBright))
            {
                brightness+=brightStep
            }
            else
            {
                direction=1;
                brightness-=brightStep;
            }
        }
        else
        {
            if((brightness>minBright))
            {
                brightness-=brightStep
            }
            else
            {
                direction=0;
                brightness+=brightStep;
            }
        }
    },timeCycle)
}
//----------------------------test cmd-----------------------------------------

//cycle color from min color to max color per 1 second
//runCycleColorAll()

//cycle brightness from min brightness to max brightness per 1 second
//runCycleBrightAll() 

//tune color and brightness individually
tuneBrightColor(5,maxBright,minColor+300)