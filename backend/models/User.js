const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    name: String,
    googleId: String,
    photo: String,
    email: String,
    tel: String,
    idCardNum: String,
    DLicenseNumber: String,
    isAuthenticated: { type: Boolean, default: false }
})

mongoose.model("users", userSchema)