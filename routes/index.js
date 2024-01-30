const router = require("express").Router();
const blogModel = require('../models/blogs');

router.get("/", (req, res) => {
    res.render('index');
})


    .post('/blog/data', async (req, res) => {
        const { name, title, content } = req.body;
        if (!title || !content) return res.send('Please Enter The All Fields.')
        let result = new blogModel({ name, title, content });
        let data = await result.save();
        console.log(data);
        res.redirect("/allblogs");
    })

    .get('/allBlogs', async (req, res) => {
        let data = await blogModel.find();
        console.log(data);
        res.render('allBlogs', { alldata: data });
    });

module.exports = router;