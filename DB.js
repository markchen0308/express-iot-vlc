const pg= require('pg');
let infoServer=require('./config');


//the database information shown in config.js file
let pgClient = new pg.Client({
    user: infoServer.dbUser,
    host: infoServer.dbHost,
    database: infoServer.dbName,
    password: infoServer.dbPassword,
    port: infoServer.dbPort,
})

//connect database
pgClient.connect().then(()=>{
    console.log('postreSQL is connected ');
})
.catch((err)=>{
    console.log('postreSQL connected unsucessfully');
    console.log("Error Message："+err);
});

//export
module.exports=pgClient;