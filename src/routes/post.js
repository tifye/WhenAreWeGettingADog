const express = require('express');
const { createDog } = require('../data-access');

const router = express.Router();

router.post('/', async (req, res) => {
  const dog = req.body;
  await createDog(dog);
  res.redirect('#dogs');
});

module.exports = router;