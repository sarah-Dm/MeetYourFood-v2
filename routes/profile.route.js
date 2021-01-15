const express = require('express');
const User = require('../models/User.model');
const Host = require('../models/Host.model');
const router = express.Router();
const fileUploader = require('../configs/cloudinary.config');
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const salt = bcryptjs.genSaltSync(saltRounds);
const mongoose = require('mongoose');

//afficher le profil d'un autre user
router.get('/profile/:userId/public', (req, res, next) => {
  //Accès à la fiche user que si le user est logué
  if (!req.session.currentUser) {
    res.status(400).json({ message: 'Please login' });
    return;
  }
  User.findById(req.params.userId)
    .then((user) => {
      //si le user est un visiteur, afficher la fiche
      if (!user.host) {
        res
          .status(200)
          .json({ message: `View profile of visitor ${user.lastName}` });
      }
      //si le user est un host, aller chercher les commmentaires en base puis afficher la fiche
      else {
        Host.findOne({
          userId: req.params.userId,
        })
          .populate('User')
          .then((host) => {
            Comment.find({ dest_id: req.params.userId })
              .populate('author_id')
              .then((comments) => {
                res.status(200).json({ message: 'comments fetched from db' });
              })
              .catch((err) =>
                res.status(400).json({ message: 'no comments found in db' })
              );
          })
          .catch((err) =>
            res
              .status(400)
              .json({ message: 'host with no comments found in db' })
          );
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'error in /profile/:userId/public' });
    });
});

//afficher son profil
router.get('/profile/:userId', (req, res, next) => {
  User.findById(req.params.userId)
    .then((user) => {
      //Accès à la fiche user que si le user est logué
      if (!req.session.currentUser) {
        res.status(400).json({ message: 'Please login' });
        // Accès à la fiche user que si le user n'est pas propriétaire de la fiche
      } else if (req.session.currentUser._id !== user.id) {
        res.status(400).json({ message: 'Please login' });
      }
      //si le user est bien la propriétaire de la fiche, la page de profile s'affiche
      else {
        res.status(200).json({ message: 'Welcome on your account' });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'error in /profile/:userId' });
    });
});

module.exports = router;
