//importing express.js library and creating an instance of an express app
const express = require('express');
const app = express();
//importing a function that connects to a MongoDB database and calls it 
const connecttoMongo = require('./db');

//importing a mongoose schema that defines a user model(schema) for the Mongodb databse
const UserSchema = require('./models/User');

//importing the Cross-Origin middleware to enable cross-origin requests
const cors = require('cors');
connecttoMongo();

//add middleware to parse incoming server request bodies as JSON
app.use(express.json())
app.use(cors());

//define a route handler for GET requests to the root URL path
app.get('/',(req,res) => {
    res.send('stuff')
});

//define a route handler for POST requests to the /submit URL path
app.post('/submit',async(req,res)=>{
    console.log(req.body);

    //create new user in db
    const newUser = await UserSchema.create({
        email: req.body.email,
        password: req.body.password
    });
    if (newUser) {
        return res.status(200).json(newUser);
    }
    res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(8181, () => {
    console.log('Server Running on port 8181!')
})

// app.get('/', (req,res)=>{

// })