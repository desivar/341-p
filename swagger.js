const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'Contacts API with Swagger',
  },
  host: 'localhost:5500',
  schemes: ['https', 'http'],
};
const outputFile = './swagger.Json';
const endpointsFiles = ['./routes/contacts.js'];

console.log('Before swaggerAutogen...');
swaggerAutogen(outputFile, endpointsFiles, doc);
console.log('After swaggerAutogen...');

//this will autogenerate swagger.json file in the outputFile path