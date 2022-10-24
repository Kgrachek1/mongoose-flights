require('dotenv').config()
var mongoose = require('mongoose');


mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on('connected', function(){
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

db.on('err', function(){
    console.log('Mongo has thrown an error', err);
});