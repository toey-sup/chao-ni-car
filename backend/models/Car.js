const mongoose = require("mongoose");
const { Schema } = mongoose;

const carSchema = new Schema({
  brand: { type: String, required: true },
  type: { type: String, required: true },
  regYear: { type: String, required: true },
  LNumber: { type: String, required: true },
  date: Date
  //_user: {type: Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model("cars", carSchema);
