const router = require('express').Router();
const contactsRoutes = require('./contacts');

router.get('/', (req, res) => {
  res.send('Welcome to the Contacts API!'); // Or a more descriptive message
});

router.use('/contacts', contactsRoutes);

module.exports = router;