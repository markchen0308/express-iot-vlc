//install module
npm install

//run
sudo node ./test/server.js
sudo node ./bin/www

//typescript compile 
tsc

//test
node ./test/test.js


//config setting
see config.js

//install postreSQL
  sudo apt-get install postgresql postgresql-contrib
  #sudo -u postgres psql      
  #postgres=# ALTER USER postgres WITH PASSWORD 'postgres';  //modify password
  #CREATE DATABASE IOT;  //create database IOT


//check port 80 
sudo lsof -i :80 | grep LISTEN
//stop apache2
sudo service apache2 stop
sudo systemctl disable apache2
