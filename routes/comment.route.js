const express = require('express');
const User = require('../models/User.model');
const Host = require('../models/Host.model');
const router = express.Router();
const mongoose = require('mongoose');
const Comment = require('../models/Comment.model');

//créer un nouveau commentaire sur une fiche host
router.post('/hosts/:userId', (req, res, next) => {
  if (!req.session.currentUser) {
    res.status(400).json({ message: 'Please login' });
    return;
  }
  const author_id = req.session.currentUser;
  const dest_id = req.params.userId;
  const { name, rate, text, averageCart } = req.body;
  Comment.create({
    dest_id,
    author_id,
    name,
    rate,
    text,
    averageCart,
  })
    .then((comment) => {
      res.status(200).json({ message: 'comment added' });
    })
    .catch((err) => {
      res.status(500).json({ message: 'comment could not be added' });
    });
});

module.exports = router;
