// BUCKET-LIST TRIP MODEL

//Pulling in mongoose
const mongoose = require('mongoose');

//Make a variable for mongoose.Schema
const Schema = mongoose.Schema;

// Creating a repeatable outline for data mapped to the details of a bucket list event
const detailsSchema = new Schema (
    {
        activityType: {type: String},description: {type: String},
        stay: {type: String,
        enum: ["Hotel", "AirBnB", "With Family/Friends", "Be a Nomad"]
        }
    }, 
);

//Creating a repeatable outline for data mapped to the bucket list event
const tripSchema = new Schema (
    {
        title: {type: String, required: true},
        eventDate: Date,
        location: {type: String, required: true},
        activites: [detailsSchema],
    }, {
        timestamps: true
    }
);

//declaring variable for the model of tripSchema, calling it "trip"
 

//declaring variable for the model of detailsSchema, calling it "details"
// 

module.exports = mongoose.model('Trip', tripSchema);
