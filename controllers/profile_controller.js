const Profile = require('../models/profile');

async function index(req, res, next) {
  const profiles = await Profile.find({});
  res.render('index', { profiles });
}

module.exports = { index };
