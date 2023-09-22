const express = require("express");
const cors = require("cors")
const app = express();
require("dotenv").config();
require(__dirname + "/src/config/database.js");
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors({
    origin : "http://localhost:3000"
}))
require(__dirname + "/src/routes")(app)
//START SERVER
const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`=============================Server of Bing House dashboard is running at port ${PORT}=============================`);
})


