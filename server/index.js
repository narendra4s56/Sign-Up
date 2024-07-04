
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee');

const app = express();
app.use(express.json());
app.use(cors());


//Database connection

mongoose.connect('mongodb://127.0.0.1:27017/employee', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));


//Login route

app.post("/login" ,  (req, res) => {
    const {email , password } = req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json({
                    status: "success",
                    userId: user._id, // Return user ID
                });
            }
            else{
                res.json("the password is incorrect")
            }
        }
        else{
            res.json("No record exist");
        }
    })
})

//Home route with user id and name

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    EmployeeModel.findById(userId)
    .then(user => {
        if(user){
            res.json({name: user.name , email: user.email});

        }
        else{
            res.status(404).json("User Not Found");
        }
    })
    .catch(err => {
        res.status(500).json({err: err.message});
    })
})


// Register Route
app.post('/register', (req, res) => {
  EmployeeModel.create(req.body)
    .then(employee => res.status(201).json(employee))
    .catch(err => res.status(400).json({ error: err.message }));
});



//My Server

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
