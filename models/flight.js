var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['DEN', 'DAL', 'LAX', 'SAN'],
    },
    arrival: {
        type: Date, 
         default: function() {
         return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
         },
    },
});

var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    flightNo: {
        type: Number, 
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date, 
        default: function() {
        return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        },
    },
    airport: {
        type: String,
        enum: ['DEN', 'DAL', 'LAX', 'SAN'],
        default: 'DEN',
    },
    destinations: [destinationSchema]
});


module.exports = mongoose.model('Flight', flightSchema);