const mongoose = require('mongoose');
const {Schema} = mongoose;
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new Schema({
    username: String,
    password: String,
    name: String,
    surname: String,
    googleId: String,
    photo: String,
    email: String,
    tel: String,
    idCardNum: String,
    DLicenseNumber: String,
    isProvider: { type: Boolean, default: false },
    isAuthenticated: { type: Boolean, default: false },
    credits: { type: Number, default: 0 },
})

userSchema.plugin(passportLocalMongoose)

mongoose.model("users", userSchema)