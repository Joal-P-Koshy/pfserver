
const router = require('./ROUTES/router');
const appMiddleware = require ('./Middlewares/appMiddleware');

// import dotenv
require('dotenv').config()

// import express
const express = require('express')

// import connection.js
require('./DB/connections')

// import cors 
const cors = require('cors')

// create server 
const pfServer = express();

// make use of cors by server 
pfServer.use(cors())

// use a middleware, to convert json to javascript object
pfServer.use(express.json());

// pfServer.use(appMiddleware);

pfServer.use(router);

// define port
const PORT = 4000;

// run the server
pfServer.listen(PORT, () => {
    console.log(`server running successfully at port : ${PORT}`);
})

pfServer.get('/', (req, res)=>{
    res.send('project fair server is running successfully')
})