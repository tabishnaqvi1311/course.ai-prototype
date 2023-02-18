const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017';

const connecttoMongo = () => {
    mongoose.connect(mongoURI, {dbName: 'courseai'}, ()=>{
        console.log('Connected To MONGO Sucessfully!');
    })
}

module.exports = connecttoMongo;