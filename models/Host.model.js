const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productHostSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    }, //aller chercher les infos du User
    farmName: {
      type: String,
      required: true,
      default: 'exemple',
    },
    farmType: {
      type: [String],
      enum: [
        'poultry-farming',
        'pig-farming',
        'cow-farming',
        'sheep-farming',
        'market-gardener',
        'viticulture',
        'beekeeping',
        'cheese-maker',
        'dairy-maker',
      ],
      required: true,
      default: 'market-gardener',
    },
    location: {
      type: String,
      enum: ['bergerac', 'compiegne', 'clermont-ferrand'],
      required: true,
      default: 'bergerac',
    }, //prendre une base de données avec toutes les villes de France (API Insee)
    address: {
      type: String,
      required: true,
      default: 'exemple',
    },
    zipCode: {
      type: Number,
      required: true,
      default: '0000',
    },
    country: {
      type: String,
      default: 'france',
      required: true,
      default: 'exemple',
    },
    latitude: String,
    longitude: String,
    certifications: {
      type: [String],
      enum: ['bio', 'AOC', 'AOP', 'IGP', 'STG', 'biodynamic', 'label_rouge'],
    },
    public: {
      type: [String],
      enum: ['children', 'seniors', 'disabled'],
    },
    description: {
      type: String,
      required: true,
      default: 'exemple',
    },
    website: String,
    openingDays: {
      type: [String],
      enum: [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
      ],
      required: true,
      default: 'monday',
    },
    openingHoursStart: {
      type: String,
      required: true,
      default: 'exemple',
    },
    openingHoursEnd: {
      type: String,
      required: true,
      default: 'exemple',
    },
    spokenLanguages: {
      type: [String],
      enum: ['french', 'english', 'spanish', 'german'],
      required: true,
      default: 'french',
    },
    activitiesType: {
      type: [String],
      enum: [
        'tasting',
        'guided-tour',
        'self-tour',
        'direct-selling',
        'workshops',
      ],
      required: true,
      default: 'tasting',
    },
    photos: {
      type: [String],
      // required: true,
    },
    maximumVisitors: {
      type: Number,
      min: 1,
      required: true,
      default: 10,
    },
  },
  {
    timestamps: true,
  }
);

const ProductHost = mongoose.model('Host', productHostSchema);
module.exports = ProductHost;
