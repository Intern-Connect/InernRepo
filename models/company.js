const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  tinNumber: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  posts: {
    type: [String],
    default: []
  }
});

const Company = mongoose.model('Company', CompanySchema);

module.exports = Company;
