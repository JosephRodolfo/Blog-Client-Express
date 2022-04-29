const Post = require('../models/post.model');
const catchAsync = require('../utils/catchAsync');

const createPost = catchAsync(async (req, res) => {
  const post = new Post({
    ...req.body,
    owner: req.user._id,
  });

  try {
    await post.save();
    res.status(201).send(post);
  } catch (e) {
    res.status(400).send(e);
  }
});

const deletePost = catchAsync(async (req, res) => {
  try {
    const post = await Post.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!post) {
      return res.status(404).send();
    }

    res.send(post);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = {
  createPost,
  deletePost,
};
