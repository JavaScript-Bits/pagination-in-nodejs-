const express = require("express");
const app = express()
const UserDB = require('./usersScheema.js');
const mongoose = require("mongoose")
const MongoClient = require('mongodb').MongoClient;


const passsport ="9Qj3xwzGOJxIjSLP";

const MONGODB_URI = "mongodb+srv://solomon:9Qj3xwzGOJxIjSLP@cluster0.zq7nsu8.mongodb.net/test"

const users =[
    {name:"solomon", age:"1"},
    {name:"somoe", age:"2"},
    {name:"solomon", age:"3"},
    {name:"kiki", age:"4"},
    {name:"solomon", age:"5"},
    {name:"solomon", age:"6"},
    {name:"solomon", age:"7"},
    {name:"solomon", age:"8"},
    {name:"solomon", age:"9"},
    {name:"solomon", age:"10"},
    {name:"solomon", age:"11"},
    {name:"solomon", age:"12"},
    {name:"solomon", age:"13"},
    {name:"solomon", age:"14"},
    {name:"solomon", age:"15"},
    {name:"solomon", age:"16"},
    {name:"solomon", age:"17"},
    {name:"moan", age:"18"},
    {name:"solomon", age:"19"},
    {name:"lesto", age:"20"},
    
    
]
app.get("/users", (req, res)=>{
res.json(users)
})

app.get("/paginated", (req, res)=>{
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    console.log(page);
    console.log(limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results ={};

    if(endIndex < users.length){
        results.next ={
            page:page + 1,
            limit:limit
        }
    }
   

   
    if (startIndex > 0){
        results.previous ={
            page:page - 1,
            limit:limit
        }
    }
    results.results =  users.slice(startIndex, endIndex)
    res.json(results)
    })
    

   
mongoose.connect(MONGODB_URI)
.then(() => {
  console.log('Connected to MongoDB!');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});


app.get('/add/users', async (req, res) => {
    try {
        console.log("routes hits")
        const name = "makena"
        const age = 34
      const user = new UserDB({
        name:name, 
        age:age,
      });
      const result = await user.save();
      res.status(201).send(result);
    } catch (error) {
        console.log(error)
      res.status(400).send(error);
    }
  });


  app.get("/get/users", async(req, res)=>{
    const page = parseInt(req.query.page);
  const pageSize = parseInt(req.query.limit);

    try{
        const totalUsers = await UserDB.countDocuments();
        const totalPages = Math.ceil(totalUsers / pageSize);
        const paginatedUsers = await UserDB.find()
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    res.status(200).json({
        totalUsers,
        paginatedUsers,
      totalPages,
      currentPage: page
    });
    }catch(error){
console.log(error)
console.error(error);
res.status(500).send('Server Error');
    }
    })

    app.get("/users/getall", async(req, res)=>{
        const totalUsers = await UserDB.countDocuments();

        const paginatedUsers = await UserDB.find()   
    res.status(200).json({
        totalUsers,
        paginatedUsers
    });
        })
      
app.listen(5000, ()=>{
    console.log("app connected on port 5000")
})