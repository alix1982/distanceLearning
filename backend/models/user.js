const mongoose = require('mongoose');
// const validator = require('validator');

const userSchema = new mongoose.Schema({
  password: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 6,
    // select: false,
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  snils: {
    type: String,
    required: true,
    minlength: 11,
    maxlength: 11,
    unique: true,
  },
  programm: {
    programm1:{
      assigned:{
        type: Boolean,
        required: true,
      },
      block1:{
        thema1:{
          timestart:{type: Number,},
          timeend:{type: Number,},
          passed:{type: Boolean}
        },
        thema2:{
          timestart:{type: Number,},
          timeend:{type: Number,},
          passed:{type: Boolean}
        },
        thema3:{
          timestart:{type: Number,},
          timeend:{type: Number,},
          passed:{type: Boolean}
        },
        test:{
          time:{type: Number,},
          passed:{type: Boolean}
        }
      },
      block2:{
        thema1:{
          timestart:{type: Number,},
          timeend:{type: Number,},
          passed:{type: Boolean}
        },
        thema2:{
          timestart:{type: Number,},
          timeend:{type: Number,},
          passed:{type: Boolean}
        },
        thema3:{
          timestart:{type: Number,},
          timeend:{type: Number,},
          passed:{type: Boolean}
        },
        test:{
          time:{type: Number,},
          passed:{type: Boolean}
        }
      },
      block3:{
        thema1:{
          timestart:{type: Number,},
          timeend:{type: Number,},
          passed:{type: Boolean}
        },
        thema2:{
          timestart:{type: Number,},
          timeend:{type: Number,},
          passed:{type: Boolean}
        },
        thema3:{
          timestart:{type: Number,},
          timeend:{type: Number,},
          passed:{type: Boolean}
        },
        test:{
          time:{type: Number,},
          passed:{type: Boolean}
        }
      },
    },
    programm2:{
      assigned:{
        type: Boolean,
        required: true,
      },
      block1:{
        thema1:{
          timestart:{type: Number,},
          timeend:{type: Number,},
          passed:{type: Boolean}
        },
        thema2:{
          timestart:{type: Number,},
          timeend:{type: Number,},
          passed:{type: Boolean}
        },
        thema3:{
          timestart:{type: Number,},
          timeend:{type: Number,},
          passed:{type: Boolean}
        },
        test:{
          time:{type: Number,},
          passed:{type: Boolean}
        }
      },
      block2:{
        thema1:{
          timestart:{type: Number,},
          timeend:{type: Number,},
          passed:{type: Boolean}
        },
        thema2:{
          timestart:{type: Number,},
          timeend:{type: Number,},
          passed:{type: Boolean}
        },
        thema3:{
          timestart:{type: Number,},
          timeend:{type: Number,},
          passed:{type: Boolean}
        },
        test:{
          time:{type: Number,},
          passed:{type: Boolean}
        }
      },
      block3:{
        thema1:{
          timestart:{type: Number,},
          timeend:{type: Number,},
          passed:{type: Boolean}
        },
        thema2:{
          timestart:{type: Number,},
          timeend:{type: Number,},
          passed:{type: Boolean}
        },
        thema3:{
          timestart:{type: Number,},
          timeend:{type: Number,},
          passed:{type: Boolean}
        },
        test:{
          time:{type: Number,},
          passed:{type: Boolean}
        }
      },
    },
    programm3:{
      assigned:{
        type: Boolean,
        required: true,
      },
      block1:{
        thema1:{
          timestart:{type: Number,},
          timeend:{type: Number,},
          passed:{type: Boolean}
        },
        thema2:{
          timestart:{type: Number,},
          timeend:{type: Number,},
          passed:{type: Boolean}
        },
        thema3:{
          timestart:{type: Number,},
          timeend:{type: Number,},
          passed:{type: Boolean}
        },
        test:{
          time:{type: Number,},
          passed:{type: Boolean}
        }
      },
      block2:{
        thema1:{
          timestart:{type: Number,},
          timeend:{type: Number,},
          passed:{type: Boolean}
        },
        thema2:{
          timestart:{type: Number,},
          timeend:{type: Number,},
          passed:{type: Boolean}
        },
        thema3:{
          timestart:{type: Number,},
          timeend:{type: Number,},
          passed:{type: Boolean}
        },
        test:{
          time:{type: Number,},
          passed:{type: Boolean}
        }
      },
      block3:{
        thema1:{
          timestart:{type: Number,},
          timeend:{type: Number,},
          passed:{type: Boolean}
        },
        thema2:{
          timestart:{type: Number,},
          timeend:{type: Number,},
          passed:{type: Boolean}
        },
        thema3:{
          timestart:{type: Number,},
          timeend:{type: Number,},
          passed:{type: Boolean}
        },
        test:{
          time:{type: Number,},
          passed:{type: Boolean}
        }
      },
    },
  }
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

module.exports = mongoose.model('user', userSchema);
