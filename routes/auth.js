const express = require('express');
const router = express.Router();
const { registerUser, loginUser, googleLogin } = require('../controllers/authController');


router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/google/callback', passport.authenticate('google', { session: false }), googleLogin);

module.exports = router;
