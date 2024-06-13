const IncorrectData_400 = require('../errors/400-incorrectData');
const NoDate_404 = require('../errors/404-noDate');
const Questionnaire = require('../models/questionnaire');
const User = require('../models/user');
const { mesErrNoUser404, mesErrNoQuestionnaire404, mesAddProgrammUserCompleted, mesAddProgrammUserCancelled, mesErrIdUser400, mesErrValidationUser400, mesErrIdProgramm400 } = require('../utils/messageServer');

module.exports.getUserMe = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      if (user === null) {
        throw new NoDate_404(mesErrNoUser404);
      }
      res.send(user);
    })
    .catch(next);
};

module.exports.getDataMe = (req, res, next) => {
  let userData = {};
  User.findById(req.user._id)
    .then((user) => {
      if (user === null) {
        throw new NoDate_404(mesErrNoUser404);
      }
      return user;
    })
    .then((user)=> {
      Questionnaire.find( { snils: user.snils } )
        .then((questionnaire)=> {
          if (questionnaire === null) {
            throw new NoDate_404(mesErrNoQuestionnaire404);
          }
          userData = {user: user, questionnaire: questionnaire[0]}
          res.send(userData);
        })
    })
    .catch(next);
};

module.exports.patchUserProgramm = (req, res, next) => {
  const { programm } = req.body;
  const { id } = req.params;
  User.findById(req.user._id)
  .then((user) => {
      if (!(id === '1' || id === '2' || id === '3')) {
        throw new IncorrectData_400(mesErrIdProgramm400);
      };
      if (user === null) {
        throw new NoDate_404(mesErrNoUser404);
      }
      let programm1 = user.programm.programm1;
      let programm2 = user.programm.programm2;
      let programm3 = user.programm.programm3;

      switch (id) {
        case '1':
          return user.updateOne(
            {$set: { programm: { programm1: programm, programm2: programm2, programm3: programm3 } }},
            { new: true, runValidators: true }
          );
        case '2':
          return user.updateOne(
            {$set: { programm: { programm1: programm1, programm2: programm, programm3: programm3 } }},
            { new: true, runValidators: true }
          );
        case '3':
          return user.updateOne(
            {$set: { programm: { programm1: programm1, programm2: programm2, programm3: programm } }},
            { new: true, runValidators: true }
          );
        default:
          return;
      }
    })
    .then((user) => {
      if (user.acknowledged === true) {
        return res.send(
          // isModeration ?
            { message: mesAddProgrammUserCompleted }
            // : { message: mesAddProgrammUserCancelled }
        )
      } else {
        return res.send(user)
      }
    })
    .catch((err) => {
      console.log(err.name);
      if (err.name === 'CastError') {
        next(new IncorrectData_400(mesErrIdUser400));
        return;
      }
      if (err.name === 'ValidationError') {
        return next(new IncorrectData_400(mesErrValidationUser400));
      }
      next(err);
    });
};