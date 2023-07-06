const JWT = require("jsonwebtoken");

const jwtAuth = (req, res, next) => {
    const token = req.cookies.token || null; // Read the token from cookies

    if (!token) {
        return res.status(400).json({
            success: false,
            message: "Not authorized",
        });
    }

    try {
        const payload = JWT.verify(token, process.env.SECRET);
        req.user = { id: payload.id, email: payload.email, name: payload.name};
        next();
    } catch (e) {
        return res.status(400).json({
            success: false,
            message: e.message,
        });
    }
};

module.exports = jwtAuth;
