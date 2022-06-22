const express = require('express');
const multer = require('multer');
const path = require('path');
const { createDog, removeDog } = require('../data-access');

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../public/images'),
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  }
});

const router = express.Router();
const upload = multer({ storage: storage });

router.post('/', upload.single('image'), async (req, res) => {
  const dog = req.body;
  dog.imageLink = req.file.filename;
  await createDog(dog);
  res.redirect('#dogs');
});

router.post('/delete/:dogId', async (req, res) => {
  const { dogId } = req.params;
  await removeDog(dogId);
  res.redirect('/#dogs');
});

module.exports = router;