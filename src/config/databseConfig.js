const mongoose = require('mongoose');

const Connect=async (url)=>{
    try {
   await mongoose.connect(url);
        console.log('DB connected')
    } catch (error) {
        throw error;
    }
}
module.exports=Connect;