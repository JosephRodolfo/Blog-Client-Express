const Comment = require('../models/comment.model');
const catchAsync = require('../utils/catchAsync');

const postComment = catchAsync(async (req, res) => {
  const comment = new Comment({
    ...req.body,
   // owner: req.user._id,
  });

  try {
    await post.save();
    res.status(201).send(comment);
  } catch (e) {
    res.status(400).send(e);
  }
});



module.exports = {
  postComment,
};
