const express  = require('express');
const connectDB  = require("./db/database")
const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/auth.routes')
const foodRoutes = require('./routes/food.routes')
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin:"http://localhost:5173",
    Credential:true
}))

connectDB();

app.use('/api/auth',authRoutes);
app.use('/api/food',foodRoutes);

module.exports = app;