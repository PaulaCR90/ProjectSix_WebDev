const Discipline = require('../models/discipline');

const getDisciplines = async (req, res, next) => {
  try {
    const Disciplines = await Discipline.find().populate('bestBreeds');
    return res.status(200).json(Disciplines);
  } catch (error) {
    return res.status(400).json('Error finding DDBB discipline/s!');
  }
};

const getDiscipline = async (req, res, next) => {
  try {
    const { id } = req.params;
    const discipline = await Discipline.findById(id).populate('bestBreeds');
    return res.status(200).json(discipline);
  } catch (error) {
    return res.status(400).json(`Error: ${error}`);
  }
};

const postDiscipline = async (req, res, next) => {
  try {
    const existingDiscipline = await Discipline.findOne({
      name: req.body.name
    });
    if (existingDiscipline) {
      return res
        .status(400)
        .json(`Discipline already exists! ${existingDiscipline}`);
    }

    const newDiscipline = new Discipline(req.body);
    const savedDiscipline = await newDiscipline.save();
    return res.status(200).json(savedDiscipline);
  } catch (error) {
    return res
      .status(400)
      .json(`${error} Error creating a new source for disciplines DDBB!`);
  }
};

const updateDiscipline = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const DisciplineUpdated = await Discipline.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true
      }
    );
    updateData.bestBreeds = [...new Set(updateData.bestBreeds)]; //! elimina duplicados en el array relacionado
    return res.status(200).json(DisciplineUpdated);
  } catch (error) {
    return res.status(400).json(`${error} Error updating discipline!`);
  }
};

const deleteDiscipline = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedDiscipline = await Discipline.findByIdAndDelete(id);
    return res.status(200).json({
      message: 'Element deleted!',
      element: deletedDiscipline
    });
  } catch (error) {
    return res.status(400).json('Error deleting discipline!');
  }
};

module.exports = {
  getDiscipline,
  getDisciplines,
  postDiscipline,
  updateDiscipline,
  deleteDiscipline
};
