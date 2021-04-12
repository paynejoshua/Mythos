const mongoose = require('mongoose')
const Schema = mongoose.Schema

let User = new Schema({

    user: {
        type: String
    },

    name: {
        type: String
    },

    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

    password:{
        type: String
    },

    characterName: {
        type: String
    },

    faction: {
        type: String
    },

    profilepic: {
        type: String
    },

    img1: {
        type: String
    },

    img2: {
        type: String
    },

    age: {
        type: Number
    }

})

module.exports = mongoose.model('User', User);
