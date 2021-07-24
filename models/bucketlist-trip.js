// BUCKET-LIST TRIP MODEL

//Pulling in mongoose
const mongoose = require('mongoose');

//Make a variable for mongoose.Schema
const Schema = mongoose.Schema;

//Creating a repeatable outline for data mapped to the bucket list event
const tripSchema = new Schema (
    {
        _id: ObjectId,
        title: {type: String, required: true},
        eventDate: Date,
        location: {type: String, required: true},
        activites: [detailsSchema],
    }, {
        timestamps: true
    }
);

//Creating a repeatable outline for data mapped to the details of a bucket list event
const detailsSchema = new Schema (
    {
        _id: ObjectId,
        title: {type: String, required: true},
        description: String,
        eventGroup: String,
        bucketList: [bucketListSchema],
    }, {
        timestamps: true
    }
);

//declaring variable for the model of tripSchema, calling it "trip"
const trip = mongoose.model('Trip', tripSchema);

//declaring variable for the model of detailsSchema, calling it "details"
const details = mongoose.model('Details', detailsSchema);

module.exports = {
    trip,
    details
}
