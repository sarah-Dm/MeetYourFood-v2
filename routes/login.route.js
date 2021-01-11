const express = require('express');
const User = require('../models/User.model');
const Host = require('../models/Host.model');
const router = express.Router();
const fileUploader = require('../configs/cloudinary.config');
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const salt = bcryptjs.genSaltSync(saltRounds);
const mongoose = require('mongoose');

//afficher son profil---TODO---
router.get('/profile/:userId', (req, res, next) => {
  User.findById(req.params.userId).then((user) => {
    console.log(user);
    //si le user n'est pas logué, retour à la page de login/sa page de compte s'il est logué
    if (!req.session.currentUser) {
      res.status(400).json({ message: 'Please login' });
      //si le user n'est pas propriétaire de la fiche, retour à la page de login/sa page de compte s'il est logué
    } else if (req.session.currentUser._id !== user.id) {
      res.status(400).json({ message: 'Please login' });
    }
    //si le user est bien la propriétaire de la fiche, la page de profile s'affiche
    else {
      res.status(200).json({ message: 'Welcome on your account' });
    }
  });
});

//afficher le profil d'un autre user---TODO---
router.get('/profile/:userId/public', (req, res, next) => {});



module.exports = router;
