const express = require('express');
const app = express();
const connecttoMongo = require('./db');
const UserSchema = require('./models/User');
const cors = require('cors');

connecttoMongo();

app.use(express.json())
app.use(cors());

app.get('/',(req,res) => {
    res.send('stuff')
});

app.post('/submit',async(req,res)=>{
    console.log(req.body);
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