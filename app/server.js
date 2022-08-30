const express = require("express");
const cors = require("cors");
const res = require("express/lib/response");
const app = express();
var corsOptions = {
    origin: "https://localhost:8081"
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//simple route
app.get('/', (req, res) => {
    res.json({message: "Welcome to MEAN Stack Application"});
});

// set request listening PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}.`);
});