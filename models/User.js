const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    },
    phone: {
        type: String,
        //required: true,
        max: 10,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        max: 30,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    profilePicture: {
        type: String,
        default: ""
    },
    dob: {
        type: Date,
        //required: true,
        trim: true,
    },
    address: {
        type: String,
        //required: true
    },
    followers: {
        type: Array,
        default: []
    },
    followings: {
        type: Array,
        default: []
    },

},
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);