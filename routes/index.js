const router = require('express').Router();
const contactsRoutes = require('./contacts');

router.use('/contacts', contactsRoutes); // Mount the contacts routes under /contacts

// You might have other routes here

module.exports = router;