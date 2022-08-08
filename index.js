const express = require ("express");
const coursesRouter = require("./routes/courses");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//.env file config
require("dotenv").config()

app.use(bodyParser.json())
// app.use(express.json());
app.use("/api/v1/courses/",coursesRouter)


mongoose.connect('mongodb://vatsalk:ejnDb0zn54HqoEXrchNCISC54Ku4@15.206.7.200:28017/vatsalk?authSource=admin&ssl=false').then(() => {
    console.log("database connected ....");    
}).catch(err => {
    console.log('err :: ', err);
});

// app.get("/",(req,res) => {
// res.send("<h1> welcome </h1>");
// });


app.listen(process.env.PORT,()=>{
    console.log(`server is started 3620`);
});