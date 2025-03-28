const router = require('express').Router();
const contactsController = require('../../controllers/contacts'); // Adjust the path if needed

router.get('/', contactsController.getAll);
router.get('/:id', contactsController.getById);

module.exports = router;