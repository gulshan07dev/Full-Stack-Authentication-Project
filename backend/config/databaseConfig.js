const mongoose = require('mongoose');

const databaseConnect = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then((conn) => {
        console.log(`connected to db ${conn.connection.host}`);
    })
    .catch((err) => {
        console.log(`err: ${err.message}`);
    })
}

module.exports = databaseConnect;