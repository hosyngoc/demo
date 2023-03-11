const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  address: { type: String },
  email: { type: String },
  job: { type: String },
  name: { type: String },
  phone: { type: String },
  website: { type: String },
  avatar: { type: String },
});

const ProfileModel = mongoose.model('Profile', ProfileSchema);

module.exports = ProfileModel;
