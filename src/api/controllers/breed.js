const Breed = require('../models/breed');

const getBreeds = async (req, res, next) => {
  try {
    const breeds = await Breed.find().populate('bestDiscipline');
    return res.status(200).json(breeds);
  } catch (error) {
    return res.status(400).json('Error finding DDBB breed/s!');
  }
};

const getBreed = async (req, res, next) => {
  try {
    const { id } = req.params;
    const breed = await Breed.findById(id).populate('bestDiscipline');
    return res.status(200).json(breed);
  } catch (error) {
    return res.status(400).json(`Error: ${error}`);
  }
};

const postBreed = async (req, res, next) => {
  try {
    const existingBreed = await Breed.findOne({ name: req.body.name });
    if (existingBreed) {
      return res.status(400).json({
        message: 'Breed already exists!',
        breed: existingBreed
      });
    }

    const newBreed = new Breed(req.body);
    const savedBreed = await newBreed.save();
    return res.status(200).json(savedBreed);
  } catch (error) {
    return res
      .status(400)
      .json(`${error} Error creating a new source for breeds DDBB!`);
  }
};

const updateBreed = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newBreed = new Breed(req.body);
    newBreed._id = id;
    const breedUpdated = await Breed.findByIdAndUpdate(id, req.body, {
      new: true
    });
    return res.status(200).json(breedUpdated);
  } catch (error) {
    console.log(error);
    return res.status(400).json('Error updating breed!');
  }
};

const deleteBreed = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBreed = await Breed.findByIdAndDelete(id);
    return res.status(200).json({
      message: 'Element deleted!',
      element: deletedBreed
    });
  } catch (error) {
    return res.status(400).json('Error deleting breed!');
  }
};

module.exports = { getBreed, getBreeds, postBreed, updateBreed, deleteBreed };
