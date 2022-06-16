const express = require('express');
const { getAllDogs } = require('../data-access');

const router = express.Router();

router.get('/', async (req, res) => {
  const dogs = await getAllDogs();
  res.render('layout', { dogs });
});

module.exports = router;