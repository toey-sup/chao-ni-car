const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    name: String,
    googleId: String,
    photo: String,
    email: String,
    tel: String,
    idCardNum: String,
    birthdate: Date,
    address: String,
    DLicenseNumber: String
})

mongoose.model("users", userSchema)