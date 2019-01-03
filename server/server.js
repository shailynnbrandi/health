//Local imports
require('./config/config')
require('./db/mongodb-connect')

//module imports
const express = require('express');
const bodyParser = require('body-parser');
const {MongoClient} = require('mongodb')

const {ObjectId} = require('mongodb');
var {mongoose} = require('./db/mongoose');

var app = express();
const port = process.env.PORT

app.use(bodyParser.json());

app.get('/health', (req, res) => {
  console.log("REQ Received");
  let resJson ={
    "Status":"UP", 
    "Version":"1.0.0",
    "DBStatus": (dbStatus),
    "Date":(date)};

    res.send(resJson)
});


app.listen(port, () =>{
  console.log(`Started on port ${port}`)
})

//Date and time
var date;
date = new Date();
date = date.getUTCFullYear() + '-' +
    ('00' + (date.getUTCMonth()+1)).slice(-2) + '-' +
    ('00' + date.getUTCDate()).slice(-2) + ' ' + 
    ('00' + date.getUTCHours()).slice(-2) + ':' + 
    ('00' + date.getUTCMinutes()).slice(-2) + ':' + 
    ('00' + date.getUTCSeconds()).slice(-2);



module.exports = {app};