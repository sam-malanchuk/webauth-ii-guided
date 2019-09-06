const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');

module.exports = (req, res, next) => {
  console.log(req.session);
  if(req.session && req.session.user) {
    // you have authenticated
    next();
  } else {
    // you have not authenticated
    res.status(401).json({ message: 'Invalid Credentials' });
  }
};
