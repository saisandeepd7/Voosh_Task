const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  googleId: String,
  facebookId: String,
  twitterId: String,
  githubId: String,
  email: { type: String, required: false, unique: true },
  password: String,
  name: String,
  bio: String,
  phone: String,
  photo: String,
  profileVisibility: { type: String, default: 'public' }, // 'public' or 'private'
  role: { type: String, default: 'user' } // 'user' or 'admin'
});

module.exports = mongoose.model('users', UserSchema);
