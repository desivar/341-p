const router = require('express').Router();
const contactsController = require('../controllers/contacts'); // Changed the path

router.get('/', contactsController.getAll);
router.get('/:id', contactsController.getById);

module.exports = router;