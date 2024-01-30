const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// connect To The Data Base !
try{
    mongoose.connect("mongodb://localhost:27017/blogs");
    console.log("Your Data Base Is Connected !")
}
catch(error){
    console.log('Your Data Base Not Connected !')
}



// Middlewear
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');



// routes
app.use(require("./routes/index"));
app.use(require("./routes/fullBlog"));



app.listen(port, () => console.log(`Example app listening on port ${port}!`))