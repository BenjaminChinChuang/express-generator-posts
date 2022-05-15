const Mongoose = require('mongoose')
const PostSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: [true, ''],
  },
  tags: {
    type: Array,
    required: [true, ''],
  },
  type: {
    type: Array,
    enum: ['group', 'personal'],
    required: [true, ''],
  },
  image: {
    type: String,
    default: '',
  },
  createAt: {
    typ: Date,
    default: Date.now,
    select: false,
  },
  content: {
    type: String,
    required: [true, ''],
  },
  likes: {
    type: Number,
    default: 0,
  },
  comments: {
    type: Number,
  },
})

const POST = Mongoose.model('posts', PostSchema)

module.exports = POST
