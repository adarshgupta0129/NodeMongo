const express = require('express')
const movieRoute = require('./movieRoute')
require("dotenv/config")
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5555;

const app = express(); 

app.use("/movies", movieRoute)

//Mongoose DB connection

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('✅ MongoDB Connected Successfully!');
  //  process.exit(0);
  })
  .catch((err) => {
    console.error('❌ MongoDB Connection Failed:', err.message);
    process.exit(1);
  });

app.listen(PORT, ()=>{  
    console.log('Server running on 5555 port')
})