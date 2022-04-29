const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const Post = require('../../models/post.model')


const router = express.Router();

router.post('/new', auth(), async (req, res) => {
    const task = new Post({
      ...req.body,
    })


    try {
        await task.save();
        res.status(201).send(task);
      } catch (e) {
        res.status(400).send(e);
      }
    
    
    })


    module.exports = router