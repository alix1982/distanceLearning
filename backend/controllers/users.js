const NoDate_404 = require('../errors/404-noDate');
const Questionnaire = require('../models/questionnaire');
const User = require('../models/user');
const { mesErrNoUser404, mesErrNoQuestionnaire404 } = require('../utils/messageServer');

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

          // userQuestionnaire = questionnaire[0];
          // return questionnaire[0];
        })
    })
    .catch(next);
};