const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log(`Database Connected`)
    })
    .catch(()=>{
        console.log(`Database not connected`)
    })
}

module.exports = connectDB;