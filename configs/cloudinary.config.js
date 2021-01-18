// configs/cloudinary.config.js
require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'meet-your-food-React-v2', // The name of the folder in cloudinary
    allowedFormats: ['jpg', 'png'],
    // resource_type: 'raw', // this is in case you want to upload other type of files, not just images
    public_id: (req, file) => file.originalname, // The file on cloudinary would have the same name as the original file name
  },
});
// storage: storage
const uploadCloud = multer({
  storage,
});
module.exports = uploadCloud;
