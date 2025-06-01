const express = require('express');
const router = express.Router();
const controller = require('../controllers/authorControllers');

router.get('/', controller.getAllAuthors);
router.put('/:id', controller.updateAuthor);

module.exports = router;