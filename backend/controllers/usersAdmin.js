const IncorrectData_400 = require('../errors/400-incorrectData');
const NoDate_404 = require('../errors/404-noDate');
const ConflictData_409 = require('../errors/409-conflictData');
const Questionnaire = require('../models/questionnaire');
const User = require('../models/user');
const translit = require('../utils/translit');

const {
  mesErrConflictUser409,
  mesErrNoQuestionnaire404,
  mesErrValidationUser400,
  mesErrNoUser404,
  mesErrIdUser400
} = require('../utils/messageServer');

module.exports.getUsers = (req, res, next) => {
  User.find({})
    .then((users) => {
      if (users.length === 0) {
        throw new NoDate_404(mesErrNoUser404);
      }
      res.send(users);
    })
    .catch(next);
};

module.exports.createUser = (req, res, next) => {
  const { snils } = req.body;
  let userQuestionnaire = {};
  Questionnaire.find( { snils: snils } )
    .then((questionnaire)=> {
      if (questionnaire === null) {
        throw new NoDate_404(mesErrNoQuestionnaire404);
      }
      userQuestionnaire = questionnaire[0];
      return userQuestionnaire;
    })
    .then((userQuestionnaire)=>{
      User.create({
        snils: snils,
        name: translit(userQuestionnaire.firstName),
        password: Math.floor(Math.random() * 100000),
        programm: {programm1: false, programm2: false, programm3: false}
      })
        .then((user) => {
          const userRes = {
            snils: user.snils,
            name: user.name,
            password: user.password,
            programm: user.programm
          };
          res.send(userRes);
        })
        .catch((err) => {
          console.log(err.name);

          if (err.name === 'ValidationError') {
            next(new IncorrectData_400(mesErrValidationUser400));
            return;
          }
          if (err.code === 11000) {
            next(new ConflictData_409(mesErrConflictUser409));
            return;
          }
          next(err);
        });
    });
};

module.exports.updateUserProgramm = (req, res, next) => {
  User.findByIdAndUpdate(req.params._id, {programm: req.body}, { new: true, runValidators: true })
    .then((user) => {
      if (user === null) {
        throw new NoDate_404(mesErrNoUser404);
      }
      res.send(user);
    })
    .catch((err) => {
      console.log(err.name);
      if (err.name === 'CastError') {
        next(new IncorrectData_400(mesErrIdUser400));
        return;
      };
      if (err.name === 'ValidationError') {
        next(new IncorrectData_400(mesErrValidationUser400));
        return;
      };
      next(err);
    });
};

module.exports.deleteUserAdmin = (req, res, next) => {
  // console.log(req.params._id);
  User.findById(req.params._id)
    .then((user) => {
      // console.log(req);
      if (user === null) {
        throw new NoDate_404(mesErrNoUser404);
      }
      // if (req._id !== questionnaire.owner.toString()) {
      //   throw new ConflictData_409(mesErrDeleteMovie403);
      // }
      return user.remove();
    })
    .then((user) => res.send(user))
    .catch((err) => {
      console.log(err.name);
      if (err.name === 'CastError') {
        next(new IncorrectData_400(mesErrIdUser400));
        return;
      }
      next(err);
    });
};
