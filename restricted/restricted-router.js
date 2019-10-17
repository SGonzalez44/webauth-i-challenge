const express = require('express');

router = express();

router.get('/secret', (req, res) => {
  res.send('Hello World from /api/restricted/secret');
});

router.get('/gold', (req, res) => {
  res.send('Hello World from /api/restricted/gold');
});

router.get('/shmurduh', (req, res) => {
  res.send('Hello World from /api/restricted/shmurduh');
});

module.exports = router;