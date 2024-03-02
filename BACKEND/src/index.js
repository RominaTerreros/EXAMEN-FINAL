const express=require ("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors');


//rutas
const clientRoutes = require("./rutas/client");
const mentorRoutes = require("./rutas/mentor");
const serviceRoutes = require("./rutas/service");
const transactionRoutes = require("./rutas/transaction");

const app=express();
const port = process.env.PORT || 8000;

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use('/api',clientRoutes);
app.use('/api',mentorRoutes);
app.use('/api',serviceRoutes);
app.use('/api',transactionRoutes);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });
  
//routes
app.get("/",(req, res) => {
    res.send("Welcome to my API");
});

// mongodb connect
mongoose
.connect(process.env.URI)
.then(()=> console.log("Connected to MongoDB Atlas"))
.catch((error)=> console.error(error)); 

app.listen(port, ()=> console.log('server listening on port',port));
