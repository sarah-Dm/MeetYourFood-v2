const express = require('express');
const User = require('../models/User.model');
const Host = require('../models/Host.model');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/search', (req, res, next) => {
  //construire l'objet avec les critères de recherche du front
  let queryToDb = {};
  let {
    searchfield,
    location, //["Orléans", "Toulouse"]
    openingDays, //["monday", "tuesday"]
    maximumVisitors,
    certifications, //["Bio", "AOP"]
    farmType, //["x", "y"]
    activitiesType, //["x", "y"]
    public, //["x", "y"]
    spokenLanguages, //["x", "y"]
  } = req.query;
  console.log('maximumVisitors', maximumVisitors);

  //constitution de l'objet queryToDb
  if (searchfield) {
    queryToDb.farmName = { $regex: searchfield, $options: 'i' };
    queryToDb.description = { $regex: searchfield, $options: 'i' };
  }
  if (location) {
    queryToDb.location = { $regex: location, $options: 'i' };
  }
  if (openingDays) {
    queryToDb.openingDays = openingDays;
  }
  if (maximumVisitors) {
    queryToDb.maximumVisitors = { $gte: maximumVisitors };
  }
  if (certifications) {
    queryToDb.certifications = certifications;
  }
  if (farmType) {
    queryToDb.farmType = farmType;
  }
  if (activitiesType) {
    queryToDb.activitiesType = activitiesType;
  }
  if (public) {
    queryToDb.public = public;
  }
  if (spokenLanguages) {
    queryToDb.spokenLanguages = spokenLanguages;
  }
  console.log('queryToDb', queryToDb);
  //chercher sur cet objet en base
  Host.find(queryToDb)
    .populate('userId')
    .then((resultats) => {
      res.status(200).json({
        resultats,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'error in search route' });
    });
  //remettre les critères à 0 en back ??
});

//option : faire une recherche dynamique pour les noms des villes

module.exports = router;
