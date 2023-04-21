// const mongoose = require('mongoose');

// const oathSchema = new mongoose.Schema({
//   fullName: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   country: {
//     type: String,
//     required: true
//   },
//   signedAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// module.exports = mongoose.model('Oath', oathSchema);

const mongoose = require('mongoose');

let Oath;

try {
  Oath = mongoose.model('Oath');
} catch (e) {
  const oathSchema = new mongoose.Schema({
    fullName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    country: {
      type: String,
      required: true
    },
    signedAt: {
      type: Date,
      default: Date.now
    }
  });

  Oath = mongoose.model('Oath', oathSchema);
}

module.exports = Oath;
