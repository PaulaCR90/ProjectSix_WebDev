const {
  getBreeds,
  postBreed,
  updateBreed,
  deleteBreed,
  getBreed
} = require('../controllers/breed');

const breedsRouter = require('express').Router();

breedsRouter.get('/:id', getBreed);
breedsRouter.get('/', getBreeds);
breedsRouter.post('/', postBreed);
breedsRouter.put('/:id', updateBreed);
breedsRouter.delete('/:id', deleteBreed);

module.exports = breedsRouter;
