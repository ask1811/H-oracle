const express = require('express');
const app = express();
const mongoose = require("mongoose");
const { MONGO_DB_CONFIG } = require("./config/app.config");
require("dotenv").config();
const cors=require('cors');
const port = process.env.PORT;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());
//const swaggerUi = require("swagger-ui-express"), swaggerDocument = require("./swagger.json");

mongoose.connect(MONGO_DB_CONFIG.DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(
    ()=>{
        console.log("Database connected");
    },
    (error)=>{
        console.log("Database not connected"+error);
    }
);

app.use(express.json());
app.use("/api/auth",require("./routes/auth.routes"));
app.use("/api/heart",require("./routes/heart.routes"));

app.listen(process.env.port || 4000, ()=>{
    console.log("Server running")
})