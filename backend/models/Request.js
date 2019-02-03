const mongoose = require("mongoose");
const { Schema } = mongoose;

const requestSchema = new Schema({
  _owner: {type: Schema.Types.ObjectId, ref: 'User'},
  _renter: {type: Schema.Types.ObjectId, ref: 'User'},
  placeFrom: {type: String, required: true},
  placeTo: {type: String, required: true},
  dateFrom: {type: Date, required: true},
  dateTo: {type: Date, required: true},
  pricePerDay: {type: Number, required: true},
  deposit: {type: Number, required: true},
  fee: {type: Number, required: true},
});

mongoose.model("requests", requestSchema);
