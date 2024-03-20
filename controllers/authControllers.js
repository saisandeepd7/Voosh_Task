const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const passport = require('passport');


const jwtSecret = process.env.JWT_SECRET;
const jwtExpire = process.env.JWT_EXPIRE; 

exports.registerUser = (req, res) => {
  const { name, email, password } = req.body;

  
  if (!name || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  
  User.findOne({ email })
    .then(user => {
      if (user) return res.status(400).json({ msg: 'User already exists' });

      const newUser = new User({ name, email, password });

      
      bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => {
              jwt.sign(
                { id: user.id },
                jwtSecret,
                { expiresIn: jwtExpire },
                (err, token) => {
                  if (err) throw err;
                  res.json({
                    token,
                    user: {
                      id: user.id,
                      name: user.name,
                      email: user.email
                    }
                  });
                }
              );
            });
        });
      });
    });
};

exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  
  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  
  User.findOne({ email })
    .then(user => {
      if (!user) return res.status(400).json({ msg: 'User Does not exist' });

     
      bcrypt.compare(password, user.password).then(isMatch => {
        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

        jwt.sign(
          { id: user.id },
          jwtSecret,
          { expiresIn: jwtExpire },
          (err, token) => {
            if (err) throw err;
            res.json({
              token,
              user: {
                id: user.id,
                name: user.name,
                email: user.email
              }
            });
          }
        );
      });
    });
};

exports.googleLogin = (req, res) => {
  const user = req.user;
  jwt.sign(
    { id: user.id },
    jwtSecret,
    { expiresIn: jwtExpire },
    (err, token) => {
      if (err) throw err;
      res.json({ token });
    }
  );
};
