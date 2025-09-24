const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect("mongodb+srv://rs4206254_db_user:8wJGiRRYNA47XVKe@foodscroll.dkfw22g.mongodb.net/?retryWrites=true")
    .then(()=>{
        console.log(`Database Connected`)
    })
    .catch(()=>{
        console.log(`Database not connected`)
    })
}

module.exports = connectDB;