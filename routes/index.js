const router = require('express').Router();
const contactsRoutes = require('./contacts');

router.get('/', (req, res) => {
  res.send('Welcome to the API!'); // Or some other message
});

router.use('/contacts', contactsRoutes);

module.exports = router;