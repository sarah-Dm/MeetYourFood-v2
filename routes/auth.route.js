const express = require('express');
const User = require('../models/User.model');
const Host = require('../models/Host.model');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const salt = bcryptjs.genSaltSync(saltRounds);
const mongoose = require('mongoose');

// Route de création de compte (Visitor + Host)
router.post('/create-account', (req, res, next) => {
  console.log('req.body', req.body);

  const { userProfile, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, salt);
  console.log('userProfile', userProfile);
  // const { email } = req.body;
  //vérifier que email n'existe pas déjà en base
  // User.findOne({ email })
  //   .then((user) => {
  // if (user) {
  //   res.status(400).json({ message: 'Email already exists in database' });
  //   return;
  // } else {
  //option 1) si user est un user simple = visitor
  if (userProfile === 'visitor') {
    const { firstname, name, username, profilePic } = req.body;
    User.create({
      host: false, //quand le user selectionne visiteur le booléan devient false
      firstname,
      name,
      username,
      email,
      hashedPassword,
      profilePic,
    })
      .then((user) => {
        console.log('visitor user created', user);
        res.status(200).json(user);
      })
      .catch((err) => {
        console.log('error visitor not created');
        if (err instanceof mongoose.Error.ValidationError) {
          res.status(400).json({ message: 'Erreur mongoose' });
        } else {
          res.status(400).json({ message: 'Error with visitor creation' });
        }
      });
    //option 2) si user est un user host
  } else {
    const {
      email,
      firstname,
      username,
      name,
      profilePic,
      description,
      farmName,
      website,
      address,
      zipCode,
      city,
      farmType,
      activityTypes,
      certifications,
      visitorType,
      openingDays,
      openingHoursStart,
      openingHoursEnd,
      spokenLanguages,
      photos,
      maximumVisitors,
    } = req.body;
    User.create({
      productHost: true,
      firstname,
      name,
      username,
      email,
      hashedPassword,
      profilePic,
    })
      .then((user) => {
        Host.create({
          userId: user.id,
          description,
          farmName,
          website,
          address,
          zipCode,
          city,
          farmType,
          activityTypes,
          certifications,
          visitorType,
          openingDays,
          openingHoursStart,
          openingHoursEnd,
          spokenLanguages,
          photos,
          maximumVisitors,
        })
          .then((host) => {
            console.log('host created', host);
            res.status(200).json(host);
          })
          .catch((err) => {
            console.log('error host not created');
            if (err instanceof mongoose.Error.ValidationError) {
              console.log('err', err);
              res
                .status(500)
                .json({ message: 'mongosse error in host creation' });
            } else {
              res.status(500).json({ message: 'error in host creation' });
            }
          });
      })
      .catch((err) => {
        console.log('error host not created');
        if (err instanceof mongoose.Error.ValidationError) {
          res.status(500).json({
            message: 'mongoose error in user part creation of host',
          });
        } else {
          res.status(500).json({ message: err });
        }
      });
  }
  // }
  //     })
  //     .catch((err) => {
  //       console.log('err', err);
  //       res.status(500).json({ message: 'error in main create-account route' });
  //     });
});

//Route de vérification de l'email: existe déjà en base ?
router.get('/checkEmailAvailable/:email', (req, res, next) => {
  User.find({ email: req.params.email })
    .then((user) => {
      console.log('user.length < 0', user);
      if (user.length <= 0) {
        //car user est un array
        res.status(200).json({ message: 'email available' });
      } else res.status(403).json({ message: 'email already exists' });
    })
    .catch((err) => {
      res.status(403).json({ message: 'error in /checkEmailAvailable route' });
    });
});

// Route de modification de son profil
router.put('/profiles/:userId', (req, res, next) => {
  User.findById(req.params.userId)
    .then((user) => {
      if (!user.host) {
        const { firstName, lastName, userName, email, password } = req.body;
        const hashedPassword = bcryptjs.hashSync(password, salt);
        User.findByIdAndUpdate(
          req.params.userId,
          {
            firstName,
            lastName,
            userName,
            email,
            hashedPassword,
          },
          { new: true }
        )
          .then((user) => {
            res.status(200).json({ message: 'User has been updated' });
          })
          .catch((err) => {
            if (err instanceof mongoose.Error.ValidationError) {
              res.status(400).json({ message: 'Visitor not edited !' });
            }
          });
      } else {
        const {
          firstName,
          lastName,
          userName,
          email,
          password,
          farmName,
          description,
          address,
          zipCode,
          city,
          farmType,
          activitiesType,
          certifications,
          public,
          openingDays,
          openingHoursStart,
          openingHoursEnd,
          spokenLanguages,
          maximumVisitors,
        } = req.body;
        const hashedPassword = bcryptjs.hashSync(password, salt);
        User.findByIdAndUpdate(
          req.params.userId,
          {
            firstName,
            lastName,
            userName,
            email,
            hashedPassword,
          },
          { new: true }
        ).then((user) => {
          Host.findOneAndUpdate(
            {
              userId: user.id,
            },
            {
              farmName,
              description,
              address,
              zipCode,
              city,
              farmType,
              activitiesType,
              certifications,
              public,
              openingDays,
              openingHoursStart,
              openingHoursEnd,
              spokenLanguages,
              maximumVisitors,
            },
            { new: true }
          )
            .then((host) => {
              res.status(200).json({
                message: 'host has been updated',
              });
            })
            .catch((err) => {
              console.log('in catch');
              if (err instanceof mongoose.Error.ValidationError) {
                res.status(400).json({
                  message: 'Host not updated, Mongosse error',
                });
              } else if (err.code === 11000) {
                res.status(400).json({
                  message:
                    'Username and email need to be unique. Either username or email is already used.',
                });
              } else {
                res.status(400).json({
                  message: 'err in host update',
                });
              }
            });
        });
      }
    })
    .catch((err) => res.status(500).json({ message: 'Error in put route' }));
});

// Route de suppression du compte utilisateur
router.delete('profiles/:userId', (req, res, next) => {
  User.findByIdAndDelete(req.params.userId)
    .then((user) => {
      req.session.destroy();
      res.status(200).json({ message: 'Votre profil a bien été supprimé' });
    })
    .catch((err) => res.statut(500).json({ message: err }));
});

// Connexion
router.post('/login', (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res
      .status(400)
      .json({ message: 'Please enter both, email and password to login.' });
    return;
  }
  User.findOne({
    email,
  })
    .then((user) => {
      if (!user) {
        res
          .status(400)
          .json({ message: 'Email is not registered. Try with other email.' });
        return;
      } else if (bcryptjs.compareSync(password, user.hashedPassword)) {
        req.session.currentUser = user; //required pour ts les fichiers dans app.js
        res.status(200).json({ user });
      } else {
        res.status(400).json({
          message: 'Incorrect password.',
        });
      }
    })
    .catch((err) => res.status(500).json({ message: err }));
});

// vérification que user est loggedin
router.get('/loggedin', (req, res, next) => {
  if (req.session.currentUser) {
    console.log('req.session.currentUser', req.session.currentUser);
    res.status(200).json(req.session.currentUser);
  } else {
    res.status(500).json({ message: 'no user logged' });
  }
});

// déconnexion
router.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.status(200).json({ message: 'disconnected' });
});

module.exports = router;
