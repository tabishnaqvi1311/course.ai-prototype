//import the mongoose lib
const mongoose = require('mongoose');
//define the URL for the local MongoDB server
const mongoURI = 'mongodb://localhost:27017';

//create a function that will be exported later
const connecttoMongo = () => {
    mongoose.connect(mongoURI, {dbName: 'courseai'}, ()=>{
        console.log('Connected To MONGO Sucessfully!');
    })
}
connecttoMongo()

module.exports = connecttoMongo;