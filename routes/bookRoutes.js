const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookControllers');

router.get('/', controller.getAllBooks);
router.post('/', controller.addBook);
router.delete('/:id', controller.deleteBook);

module.exports = router;