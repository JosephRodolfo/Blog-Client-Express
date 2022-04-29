const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const postSchema = mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        trim: true,
      },
      subtitle: {
        type: String,
        required: true,
        trim: true,

      },
      body: {
        type: String,
        required: true,
        unique: true,
        trim: true,

      },
      tags: {

        type: Array,
        required: true,
        unique: true,
        trim: true,
      },
    },
    {
        timestamps: true,
      }
  );
  
  // add plugin that converts mongoose to json
  postSchema.plugin(toJSON);
  postSchema.plugin(paginate);
  


  

  
  /**
   * @typedef Post
   */
  const Post = mongoose.model('Post', postSchema);
  
  module.exports = Post;
  