const mongoose = require("mongoose");
const { Schema } = mongoose;

const requestSchema = new Schema({
  _owner: {type: Schema.Types.ObjectId, ref: 'users', required: true},
  _renter: {type: Schema.Types.ObjectId, ref: 'users', required: true},
  _car: {type: Schema.Types.ObjectId, ref: 'cars', required: true},
  dateFrom: {type: Date, required: true},
  dateTo: {type: Date, required: true},
  amount: {type: Number, required: true},
  isPaid: {type: Boolean, default: false},
  isCompleted: {type: Boolean, default: false},
  status: {type: String, default: "Reserved"} // "Reserved", "PickedUp", "Completed"
});

mongoose.model("requests", requestSchema);
