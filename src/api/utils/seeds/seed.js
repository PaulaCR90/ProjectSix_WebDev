const breeds = require('../../../data/breeds');
const Breed = require('../../models/breed');
const mongoose = require('mongoose');

mongoose
  .connect(`${DB_URL}`)
  .then(async () => {
    const allBreeds = await Breed.find();
    if (allBreeds.lenght) {
      await Breed.collection.drop();
    }
  })
  .catch((error) => console.log(`Error deleting data: ${error}`))
  .then(async () => {
    await Breed.insertMany(breeds);
  })
  .catch((error) => console.log(`Error creating data: ${error}`))
  .finally(() => mongoose.disconnect());
