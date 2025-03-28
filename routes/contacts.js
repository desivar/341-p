const router = require('express').Router();
const contactsController = require('../../controllers/contacts');

router.get('/', contactsController.getAll); // This will handle GET /contacts
router.get('/:id', contactsController.getById); // This will handle GET /contacts/:id

module.exports = router;