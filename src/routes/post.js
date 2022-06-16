const express = require('express');
const { createDog, removeDog } = require('../data-access');

const router = express.Router();

router.post('/', async (req, res) => {
  const dog = req.body;
  await createDog(dog);
  res.redirect('#dogs');
});

router.post('/delete/:dogId', async (req, res) => {
  const { dogId } = req.params;
  await removeDog(dogId);
  res.redirect('/#dogs');
});

module.exports = router;