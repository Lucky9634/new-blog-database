const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    title:{
        type : String,
        required : true
    },
    content:{
        type : String,
        required : true
    },
    postedAt:{
        type : String,
        default: new Date().toString()
    }
});

module.exports = new mongoose.model("allBlogs", blogSchema);