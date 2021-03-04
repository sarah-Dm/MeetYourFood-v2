const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      default: 'exemple',
    },
    lastName: {
      type: String,
      required: true,
      default: 'exemple',
    },
    email: {
      type: String,
      match: [/.*@.*\..*/, 'Please use a valid email address.'],
      required: true,
      unique: true,
      default: 'exemple@email.com',
    },
    hashedPassword: {
      type: String,
      required: true,
      default: 'exemple',
    },
    userName: {
      type: String,
      required: true,
      default: 'exemple',
    },
    profilePic: {
      type: String,
      default:
        'https://res.cloudinary.com/nina3am/image/upload/v1601573838/meet-your-food/PngItem_307416%20%281%29.png.png',
    },
    host: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
