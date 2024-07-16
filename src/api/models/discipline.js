const mongoose = require('mongoose');
const breedsList = require('../../data/breedsList');
const disciplinesList = require('../../data/disciplinesList');

const disciplineSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, enum: disciplinesList },
  description: { type: String, required: true, trim: true },
  olympic: { type: String, enum: ['yes', 'no'], required: true, trim: true },
  bestBreeds: { type: String, enum: breedsList, trim: true }
});

const Discipline = mongoose.model(
  'disciplines',
  disciplineSchema,
  'disciplines'
);
module.exports = Discipline;
