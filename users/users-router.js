const express = require('express');

const Users = require('./users-model');
const protected = require('../auth/protected-middleware');

const router = express.Router();

// GET /api/users Endpoint
router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;