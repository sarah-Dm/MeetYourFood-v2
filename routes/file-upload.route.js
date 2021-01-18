const express = require('express');
const router = express.Router();

// include CLOUDINARY:
const uploader = require('../configs/cloudinary.config');

//charger la profile pic depuis le front et l'envoyer dans cloudinary
router.post('/singleUpload', uploader.single('imageUrl'), (req, res, next) => {
  console.log('req.file', req.file);
  if (!req.file) {
    next(new Error('No file uploaded!'));
    return;
  }
  // get secure_url (variable name to be used in front) from the file object and save it in the
  res.json({ secure_url: req.file.path });
});

//charger les photos depuis le front et les envoyer dans cloudinary
router.post(
  '/multipleUpload',
  uploader.fields([
    {
      name: 'farmPic1',
    },
    {
      name: 'farmPic2',
    },
    {
      name: 'farmPic3',
    },
    {
      name: 'farmPic4',
    },
    {
      name: 'farmPic5',
    },
    {
      name: 'farmPic6',
    },
    {
      name: 'farmPic7',
    },
    {
      name: 'farmPic8',
    },
  ]),
  (req, res, next) => {
    // console.log('req.files', req.files); //{file1:[{}],file2:[{}]};
    if (!req.files) {
      next(new Error('No file uploaded!'));
      return;
    }
    //Gérer le fait qu'il y ait moins de 8 photos (pour qu'il n'y ait pas de farmPicX undefined)
    let imageArr = [];
    for (let i = 0; i < Object.keys(req.files).length; i++) {
      let pictureName = Object.keys(req.files)[i];
      imageArr.push(req.files[pictureName][0].path);
    }
    // get secure_url (variable name to be used in front) from the file object and save it in the
    res.json(imageArr);
  }
);

module.exports = router;
