const mongoose = require("mongoose");
const { Schema } = mongoose;

const requestSchema = new Schema({
  _owner: {type: Schema.Types.ObjectId, ref: 'User'},
  _renter: {type: Schema.Types.ObjectId, ref: 'User'},
  _car: {type: Schema.Types.ObjectId, ref: 'Car'},
  placeFrom: {type: String, required: true},
  placeTo: {type: String, required: true},
  dateFrom: {type: Date, required: true},
  dateTo: {type: Date, required: true},
  isCompleted: {type: Boolean, default: false},

});

mongoose.model("requests", requestSchema);
