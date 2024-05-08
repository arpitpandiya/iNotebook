const mongoose =require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/inotebook"

connectToMongo().then(value=>console.log("Connected to Mongo Successfully"))
connectToMongo().catch(res=>console.log("Not Connected to Mongo",res))

async function connectToMongo(){
    await mongoose.connect("mongodb://127.0.0.1:27017/inotebook");
}

module.exports = connectToMongo;
