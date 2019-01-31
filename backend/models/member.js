const mongoose = require('mongoose');
const {Schema} = mongoose;

const memberSchema = new Schema({
    name: {type: String, required: true},
    surname: {type: String, required: true},
    date: Date,
    //_user: {type: Schema.Types.ObjectId, ref: 'User'}
})

mongoose.model('members', memberSchema);