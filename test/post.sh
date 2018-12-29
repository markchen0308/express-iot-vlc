
#!/bin/bash

port=3000
ip=127.0.0.1


curl -X GET http://$ip:$port/vlc/gw/get/today/latest

sleep 1
echo $'\n'
curl -X GET http://$ip:$port/vlc/gw/get/today/after?seqid=5

sleep 1
echo $'\n'
curl -X GET http://$ip:$port/vlc/gw/get/today

sleep 1
echo $'\n'
curl -X GET http://$ip:$port/vlc/gw/get/yesterday

sleep 1
echo $'\n'
curl -X GET "http://$ip:$port/vlc/gw/get/date?year=2018&month=03&date=18"

sleep 1
echo $'\n'
curl -X POST http://$ip:$port/vlc/gw/post/reset/

sleep 1
echo $'\n'
curl -X POST -d "brightness=100&driverId=1" http://$ip:$port/vlc/gw/post/dimming/brightness/

sleep 1
echo $'\n'
curl -X POST -d "brightness=100&driverId=1&colorTemperature=5000"  http://$ip:$port/vlc/gw/post/dimming/colorTemperature/

sleep 1
echo $'\n'
curl -X POST -d "brightness=100&driverId=1&colorX=0.33&colorY=0.33"  http://$ip:$port/vlc/gw/post/dimming/colorXY/

sleep 1 
echo $'\n'
 

