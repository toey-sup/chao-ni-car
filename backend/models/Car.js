const mongoose = require('mongoose')
const {Schema} = mongoose;

const carSchema = new Schema({
    ownerName: {type: String, required: true},
    brand: {type: String},
    color: {type: String},
    isBooked: {type: Boolean},
    date: Date,
    //_user: {type: Schema.Types.ObjectId, ref: 'User'}
})

mongoose.model('cars', carSchema);