const breeds = require('../../../data/breeds');
const Breed = require('../../models/breed');
const mongoose = require('mongoose');

mongoose
  .connect(
    `mongodb+srv://demetirma:yY9TusWNe8Q8PY7I@cluster0.sngxxm8.mongodb.net/`
  )
  .then(async () => {
    const allBreeds = await Breed.find();
    if (allBreeds.length) {
      await Breed.collection.drop();
    }
  })
  .catch((error) => console.log(`Error deleting data: ${error}`))
  .then(async () => {
    console.log(breeds);
    await Breed.insertMany(breeds);
  })
  .catch((error) => console.log(`Error creating data: ${error}`))
  .finally(() => mongoose.disconnect());
