const {
  getDiscipline,
  postDiscipline,
  updateDiscipline,
  deleteDiscipline,
  getDisciplines
} = require('../controllers/discipline');

const disciplinesRouter = require('express').Router();

disciplinesRouter.get('/:id', getDiscipline);
disciplinesRouter.get('/', getDisciplines);
disciplinesRouter.post('/', postDiscipline);
disciplinesRouter.put('/:id', updateDiscipline);
disciplinesRouter.delete('/:id', deleteDiscipline);

module.exports = disciplinesRouter;
