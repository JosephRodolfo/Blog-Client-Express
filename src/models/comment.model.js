const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');


const commentSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: false,
        trim: true,
      },
    
      body: {
        type: String,
        required: true,
        unique: true,
        trim: true,

      },

      owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    },
    
    {
        timestamps: true,
      }
  );
  
  // add plugin that converts mongoose to json
  commentSchema.plugin(toJSON);
  commentSchema.plugin(paginate);
  


  

  
  /**
   * @typedef Comment
   */
  const Comment = mongoose.model('Comment', commentSchema);
  
  module.exports = Comment;
  