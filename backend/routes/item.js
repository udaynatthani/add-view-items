const express = require('express');
const multer = require('multer');
const path = require('path');
const Item = require('../models/Items');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

router.get('/', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

router.post(
  '/',
  upload.fields([
    { name: 'coverImage', maxCount: 1 },
    { name: 'additionalImages' }
  ]),
  async (req, res) => {
    const { name, type, description } = req.body;
    const coverImage = req.files.coverImage?.[0]?.filename || '';
    const additionalImages = req.files.additionalImages?.map(f => f.filename) || [];

    const item = new Item({ name, type, description, coverImage, additionalImages });
    await item.save();
    res.status(201).json(item);
  }
);

module.exports = router;
