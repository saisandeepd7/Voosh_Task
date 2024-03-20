const express = require('express');
const router = express.Router();
const passport = require('passport');
const { viewProfile, editProfile, listPublicProfiles, viewAnyProfile } = require('../../controllers/userController');
const { isAdmin } = require('../middleware/isAdmin')


router.get('/profile', passport.authenticate('jwt', { session: false }), viewProfile);
router.post('/profile', passport.authenticate('jwt', { session: false }), editProfile);
router.get('/public-profiles', listPublicProfiles);
router.get('/profile/:userId', passport.authenticate('jwt', { session: false }), viewAnyProfile, isAdmin );

module.exports = router;
