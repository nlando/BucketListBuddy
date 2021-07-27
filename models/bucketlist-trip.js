// BUCKET-LIST TRIP MODEL

//Pulling in mongoose
const mongoose = require('mongoose');

//Make a variable for mongoose.Schema
const Schema = mongoose.Schema;

//Creating a repeatable outline for data mapped to the bucket list event
const tripSchema = new Schema (
    {
        title: {type: String, required: true},
        eventDate: Date,
        location: {type: String, required: true},
        activityType: {type: String},description: {type: String},
        stay: {type: String,
        enum: ["Hotel", "AirBnB", "With Family/Friends", "Be a Nomad"]
        }
    }, {
        timestamps: true
    }
);

const userSchema = new Schema({
    name: {type: String},
    email: {type: String},
    hometown: {type: String},
    avatarURL: {type: String},
    googleId: {type: String},
    tripdetails: [tripSchema],
}, {
    timestamps: true
});


//declaring variable for the model of tripSchema, calling it "trip"
 

//declaring variable for the model of detailsSchema, calling it "details"
// 

module.exports = mongoose.model('User', userSchema);
