const router = require('express').Router();
// const contactsRoutes = require('./contacts');
// router.use('/', contactsRoutes);

router.get('/', (req, res) => {
  res.send('Hello World from routes!');
});

module.exports = router;