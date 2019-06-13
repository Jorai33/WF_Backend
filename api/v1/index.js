const express = require("express");
const router = express.Router();
const BlogPost = require("../models/blog-post");


// localhost:3000/api/v1/ping
router.get("/ping", (req, res) => {
	res.status(200).json({
		message: "pong",
		date: new Date()
	});
});

// localhost:3000/api/v1/blog-posts
router.get("/blog-posts", (req, res) => {
	BlogPost.find()
		.sort({ "createdOn": -1 })
		.exec()
		.then(blogPosts => res.status(200).json(blogPosts))
		.catch(err => res.status(500).json({
			message: "Blog posts not found",
			erreur: err
		}));
});

router.post("/blog-posts", (req, res) => {
	console.log("req.body", req.body);
	const blogPost = new BlogPost(req.body);

	blogPost.save((err, blogPost) => {
		if (err) {
			return res.status(500).json(err);
		}
		res.status(201).json(blogPost);
	});
});

router.get("/blog-posts/:id", (req, res) => {
	const id = req.params.id;
	BlogPost.findById(id)
		.then(blogPost => res.status(200).json(blogPost))
		.catch(err => res.status(500).json({
			message: `blog Post with id ${id} not found`,
			erreur: err
		}));
});

router.delete("/blog-posts/:id", (req, res)=> {
	const id = req.params.id;
	BlogPost.findByIdAndDelete(id, (err, blogPost) => {
		if(err){
			return res.status(500).json(err);
		}
		res.status(202).json({
			message : `blog Post with id ${blogPost._id} deleted`
		});
	});
});

module.exports = router;