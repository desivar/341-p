const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  try {
    const db = mongodb.getDb();
    console.log('Database object obtained:', db);
    const contacts = await db.collection('contacts').find().toArray();
    console.log('Contacts retrieved:', contacts);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error getting all contacts:', error);
    res.status(500).json({ message: 'Failed to retrieve contacts' });
  }
};

const getById = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  try {
    const db = mongodb.getDb();
    const contact = await db.collection('contacts').findOne({ _id: contactId });
    if (contact) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(contact);
    } else {
      res.status(404).json({ message: 'Contact not found' });
    }
  } catch (error) {
    console.error(`Error getting contact with ID ${req.params.id}:`, error);
    res.status(500).json({ message: 'Failed to retrieve contact' });
  }
};

module.exports = { getAll, getById };