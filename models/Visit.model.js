const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const visitSchema = new Schema({
  visitedHost: { type: Schema.Types.ObjectId, ref: 'Host' },
  visitor: { type: Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date },
});

const Visit = mongoose.model('Visit', visitSchema);
module.exports = Visit;
