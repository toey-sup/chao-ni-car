const mongoose = require("mongoose");
const { Schema } = mongoose;

const carSchema = new Schema({
  brand: { type: String, required: true },
  type: { type: String, required: true },
  regYear: { type: String, required: true },
  LNumber: { type: String, required: true },
  gear: "manual" | "auto",
  seat: { type: Number },
  equipment: { type: String},
  status: "avail" | "rented",
  photo: String,
  availFrom: Date,
  availTo: Date,
  description: String,
  _owner: {type: Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model("cars", carSchema);
