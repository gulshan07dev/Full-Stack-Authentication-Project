const userModel = require('../model/userModel.js')
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');

// signup 
exports.signup = async (req, res, next) => {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
        return res.status(400).json({
            success: false,
            message: 'Every field id required'
        })
    }

    const validEmail = emailValidator.validate(email);
    if (!validEmail) {
        return res.status(400).json({
            success: false,
            message: 'please provide a valid email id'
        })
    }

    if (password != confirmPassword) {
        return res.status(400).json({
            success: false,
            message: 'password and confirm password doesnt match'
        })
    }

    const isUserAlreadyPresent = await userModel.findOne({ email });
    if (isUserAlreadyPresent) {
        return res.status(400).json({
            success: false,
            message: 'User already present'
        });
    }


    try {
        const userInfo = userModel(req.body);
        const result = await userInfo.save();

        return res.status(200).json({
            success: true,
            data: result
        });
    } catch (e) {
        return res.status(400).json({
            success: false,
            message: e.message
        })
    }
}

// login
exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: 'Email and password are required'
        });
    }

    try {
        const user = await userModel.findOne({ email }).select('+password').select('+name');

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            });
        }

        const token = user.generateAuthToken();
        res.cookie('token', token, {
            maxAge: 24 * 60 * 60 * 1000, // 24 hours
            httpOnly: true
        });

        res.status(200).json({
            success: true,
            message: 'Login successful',
            name: user.name,
            token
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// logout
exports.logout = async (req, res, next) => {
    try {
        res.clearCookie('token');
        res.status(200).json({
            success: true,
            message: 'Logged out successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}; 