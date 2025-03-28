const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    try {
        const db = mongodb.getDb();
        const contacts = await db.collection('contacts').find().toArray();
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

const createContact = async (req, res) => {
    const newContact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    try {
        const db = mongodb.getDb();
        const result = await db.collection('contacts').insertOne(newContact);
        if (result.acknowledged) {
            res.status(201).json({ id: result.insertedId });
        } else {
            res.status(500).json({ message: 'Failed to create new contact' });
        }
    } catch (error) {
        console.error('Error creating new contact:', error);
        res.status(500).json({ message: 'Failed to create new contact' });
    }
};

const updateContact = async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const updatedContact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    try {
        const db = mongodb.getDb();
        const result = await db.collection('contacts').updateOne({ _id: contactId }, { $set: updatedContact });
        if (result.modifiedCount > 0) {
            res.status(204).send(); // 204 No Content for successful update
        } else if (result.matchedCount === 0) {
            res.status(404).json({ message: 'Contact not found' });
        } else {
            res.status(500).json({ message: 'Failed to update contact' });
        }
    } catch (error) {
        console.error(`Error updating contact with ID ${req.params.id}:`, error);
        res.status(500).json({ message: 'Failed to update contact' });
    }
};

const deleteContact = async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    try {
        const db = mongodb.getDb();
        const result = await db.collection('contacts').deleteOne({ _id: contactId });
        if (result.deletedCount > 0) {
            res.status(200).send(); // 200 OK for successful deletion
        } else {
            res.status(404).json({ message: 'Contact not found' });
        }
    } catch (error) {
        console.error(`Error deleting contact with ID ${req.params.id}:`, error);
        res.status(500).json({ message: 'Failed to delete contact' });
    }
};

module.exports = { getAll, getById, createContact, updateContact, deleteContact };