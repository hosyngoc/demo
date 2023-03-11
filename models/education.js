const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EducationSchema = new Schema({
    stardate: { type: String },
    enddate: { type: String },
    school: { type: String },
  description: { type: String },
  
});

const ProfileModel = mongoose.model('Profile', ProfileSchema);

module.exports = ProfileModel;
