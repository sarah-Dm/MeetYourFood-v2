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
  const { profileType } = req.body;
  const { email } = req.body;
  console.log('email', email);
  //vérifier que email n'existe pas déjà en base
  User.findOne({ email })
    .then((user) => {
      if (user) {
        res.status(400).json({ message: 'Email already exists in database' });
        return;
      } else {
        //option 1) si user est un user simple = visitor
        if (profileType === 'visitor') {
          const { firstName, lastName, userName, password } = req.body;
          console.log('req.body', req.body);
          const hashedPassword = bcryptjs.hashSync(password, salt);
          User.create({
            host: false, //quand le user selectionne visiteur le booléan devient false
            firstName,
            lastName,
            userName,
            email,
            hashedPassword,
          })
            .then((user) => {
              console.log('user', user);
              res.status(200).json(user);
            })
            .catch((err) => {
              console.log('error visitor not created');
              if (err instanceof mongoose.Error.ValidationError) {
                res.status(400).json({ message: 'Erreur mongoose' });
              } else {
                res
                  .status(400)
                  .json({ message: 'Error with visitor creation' });
              }
            });
          //option 2) si user est un user host
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
          console.log(req.body);
          const hashedPassword = bcryptjs.hashSync(password, salt);
          User.create({
            host: true,
            firstName,
            lastName,
            userName,
            email,
            hashedPassword,
          })
            .then((user) => {
              console.log('user in host', user);
              Host.create({
                userId: user.id,
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
              })
                .then((host) => {
                  //meme si email pas unique, passe dans then()
                  console.log('host', host);
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
                res
                  .status(500)
                  .json({ message: 'eror in user part creation of host' });
              }
            });
        }
      }
    })
    .catch((err) => {
      console.log('err', err);
      res.status(400).json({ message: 'error in main create-account route' });
    });
});

//Route de modification de son profil ---TODO---
router.put('/profiles/:userId', (req, res, next) => {});

// Route de suppression du compte utilisateur
router.delete('profiles/:userId', (req, res, next) => {
  User.findByIdAndDelete(req.params.userId)
    .then((user) => {
      req.session.destroy();
      res.status(200).json({ message: 'Votre profil a bien été supprimé' });
    })
    .catch((err) => res.statut(400).json({ message: err }));
});

router.post('/login', (req, res, next) => {
  const { email, password } = req.body;
  if (email === '' || password === '') {
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
        res.status(200).json(user);
      } else {
        res.status(400).json({
          message: 'Incorrect password.',
        });
      }
    })
    .catch((err) => res.status(400).json({ message: err }));
});

router.post('/loggedin', (req, res, next) => {
  if (req.session.currentUser) {
    res.status(200).json({ message: 'user logged' });
  } else {
    res.status(400).json({ message: 'no user logged' });
  }
});

//logout
router.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.status(200).json({ message: 'disconnected' });
});

module.exports = router;
