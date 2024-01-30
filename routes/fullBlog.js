const router = require("express").Router();
const blogModel = require('../models/blogs');

router.get("/fullBlog/:id", async(req, res)=>{
    let {id} = req.params;
    let result = await blogModel.findOne({_id : id});
    res.render('fullBlog', { blog : result});
    // console.log(result);
})


module.exports = router;