const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint


  // Find all tags
  // Include its associated Product data
router.get('/', async (req, res) => {
  try {
    const TagData = await Tag.findAll({
      include: [{ model: Product, ProductTag }]
    });
    res.status(200).json(TagData);
  } catch (err) {
    res.status(500).json(err);
  }
});


  // Find a single tag by its `id`
  // Include its associated Product data
router.get('/:id', async (req, res) => {
  try {
    const TagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, ProductTag }]
    });

    if (!TagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(TagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

  // Create a new tag
router.post('/', async (req, res) => {
  try {
    const TagData = await Tag.create(req.body);
    res.status(200).json(TagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

  // Update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const TagData = await Tag.update(req.body,
      {
      where: {
        id: req.params.id
      }
    });
    if (!TagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(TagData);
  } catch (err) {
    res.status(500).json(err);
  }
});


  // Delete one tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const TagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!TagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(TagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
