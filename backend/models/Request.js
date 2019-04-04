const mongoose = require("mongoose");
const { Schema } = mongoose;

const requestSchema = new Schema({
  _owner: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  _renter: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  _car: {type: Schema.Types.ObjectId, ref: 'Car', required: true},
  dateFrom: {type: Date, required: true},
  dateTo: {type: Date, required: true},
  amount: {type: Number, required: true},
  isPaid: {type: Boolean, default: false},
  isCompleted: {type: Boolean, default: false},

});

mongoose.model("requests", requestSchema);
