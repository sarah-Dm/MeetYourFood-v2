const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  visitedHost: { type: Schema.Types.ObjectId, ref: 'Host' },
  visitor: { type: Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date },
  content: String,
  rating: Number,
});

const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;
