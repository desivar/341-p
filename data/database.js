const dotenv =require('dotenv');
dotenv.config();
constMongoClient = require('mongo').MongoClient;
let database;
const initDb = (callback) => {
    if (database) {
        console.log('Db is already initialized');
        return callback(null, database);
    }
    MongoClient.connect(process.env.MONGODB_URL)
        .then((client) => {
            database = client;
            callback(null, database);
        })
        .catch((err) => {
            callback(err);
        });
};

const getDb = () => {
    if (!database) {
        throw Error('No database found!');
    }
    return database;
};

module.exports = {
    initDb,
    getDb,
};