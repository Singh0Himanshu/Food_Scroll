const express  = require('express');
const connectDB  = require("./db/database")
const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/auth.routes')

const app = express();
app.use(express.json());
app.use(cookieParser());

connectDB();

app.use('/api/auth',authRoutes)

module.exports = app;