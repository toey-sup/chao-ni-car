const mongoose = require('mongoose');
const {Schema} = mongoose;
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new Schema({
    username: String,
    password: String,
    name: String,
    googleId: String,
    photo: String,
    email: String,
    tel: String,
    idCardNum: String,
    DLicenseNumber: String,
    isAuthenticated: { type: Boolean, default: false }
})

userSchema.plugin(passportLocalMongoose)

mongoose.model("users", userSchema)