const express = require('express');
const auth = require('../../middlewares/auth');
const postController = require('../../controllers/post.controller')


const router = express.Router();

router.post('/new', auth(), postController.createPost)

router.delete('/delete', auth(), postController.deletePost)

router.get('/readone/:id', auth(), postController.getPost)



    module.exports = router