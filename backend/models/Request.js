const mongoose = require("mongoose");
const { Schema } = mongoose;

const requestSchema = new Schema({
  _owner: {type: Schema.Types.ObjectId, ref: 'User'},
  _renter: {type: Schema.Types.ObjectId, ref: 'User'},
  _car: {type: Schema.Types.ObjectId, ref: 'Car'},
  dateFrom: {type: Date, required: true},
  dateTo: {type: Date, required: true},
  amount: {type: Number, required: true},
  isPaid: {type: Boolean, default: false},
  isCompleted: {type: Boolean, default: false},

});

mongoose.model("requests", requestSchema);
