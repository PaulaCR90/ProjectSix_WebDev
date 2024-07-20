const mongoose = require('mongoose');
const coatsList = require('../../data/coatsList');

const breedSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    origin: { type: String, required: true, trim: true },
    av_height: { type: Number, required: true },
    coats: [
      {
        type: String,
        enum: coatsList
      }
    ],
    img: { type: String, required: true },
    bestDiscipline: {
      type: mongoose.Types.ObjectId,
      ref: 'disciplines',
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const Breed = mongoose.model('breeds', breedSchema, 'breeds');
module.exports = Breed;
