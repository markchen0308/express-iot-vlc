

let InfoServer=
{
    //for webserver setting
    webserverIp:'192.168.1.7',
    webserverPort: 80,
    //for database setting
    dbUser: 'postgres',
    dbHost: 'localhost',//127.0.0.1
    dbName: 'iot',
    dbPassword: 'postgres',
    dbPort: 5432,

    //for socket client
    socketServerIP:'localhost',
    scoketServerPort:10001,

};

module.exports = InfoServer;