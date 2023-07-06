const mongoose = require('mongoose');
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'User name is required'],
        minLength: [5, 'Name must be at least 5 characters'],
        maxLength: [50, 'Name must be less than 50 characters'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'User email is required'],
        unique: [true, 'Email already registered'],
        lowercase: true
    },
    password: {
        type: String,
        select: false
    },
    forgotPasswordToken: {
        type: String
    },
    forgotPasswordExpiryDate: {
        type: Date
    }
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    return next();
});

userSchema.methods = {
    generateAuthToken() {
        return JWT.sign(
            { id: this._id, email: this.email, name: this.name },
            process.env.SECRET,
            { expiresIn: '24h' }
        );
    }
};

module.exports = mongoose.model("User", userSchema);
