const express = require('express');
require('dotenv').config();
const app = express();
const databaseConnect = require('./config/databaseConfig.js');
const authRouter = require('./router/authRouter.js');
const cookieParser = require('cookie-parser');
const cors = require('cors');

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: [process.env.CLIENT_URL], credentials: true }));

// Database initialization
databaseConnect();

app.use('/', authRouter);

module.exports = app;