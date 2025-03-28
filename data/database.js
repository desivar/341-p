const dotenv = require('dotenv');
dotenv.config();

const { MongoClient } = require('mongodb'); // Corrected import

let database;
const initDb = (callback) => { // Corrected function name
  if (database) {
    console.log('Database is already initialized!');
    return callback(null, database);
  }
  MongoClient.connect(process.env.MONGODB_URL)
    .then(client => {
      database = client.db(); // It's generally better to get the database instance here
      callback(null, database);
    })
    .catch(err => {
      callback(err);
    });
};

const getDb = () => {
  if (!database) {
    throw Error('Db not initialized');
  }
  return database;
};

module.exports = {
  initDb,
  getDb,
};