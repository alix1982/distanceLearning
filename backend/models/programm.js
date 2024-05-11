const mongoose = require('mongoose');
// const validator = require('validator');

const programmSchema = new mongoose.Schema({
  // password: {
  //   type: String,
  //   required: true,
  //   minlength: 1,
  //   maxlength: 6,
  //   // select: false,
  // },
  // name: {
  //   type: String,
  //   required: true,
  //   minlength: 2,
  //   maxlength: 30,
  // },
  // snils: {
  //   type: String,
  //   required: true,
  //   minlength: 11,
  //   maxlength: 11,
  //   unique: true,
  // },
  // programm: {
  //   type: mongoose.Types.ObjectId,
  //   required: false,
  // }
  // firstName: {
  //   type: String,
  //   // required: true,
  //   minlength: 2,
  //   maxlength: 30,
  // },
  // lastName: {
  //   type: String,
  //   // required: true,
  //   minlength: 2,
  //   maxlength: 30,
  // },
  // patronymic: {
  //   type: String,
  //   // required: true,
  //   minlength: 2,
  //   maxlength: 30,
  // },
});

module.exports = mongoose.model('programm', programmSchema);

// Movie.create({
//   country,
//   ...
//   movieId,
//   owner: req.user._id,
// })