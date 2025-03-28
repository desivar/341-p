const router = require('express').Router();
const contactsRoutes = require('./contacts');

router.use('/contacts', contactsRoutes);

module.exports = router;