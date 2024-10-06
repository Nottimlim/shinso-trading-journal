const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
         required: true,
         unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }});

userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypto.hash(this.password, 8);
    }
    next();
});

module.exports = mongoose.model('User', userSchema)