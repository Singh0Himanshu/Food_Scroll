require('dotenv').config();
const app= require('./src/app')

app.listen(3000,()=>{
    console.log(`app running on 3000 port`)
})