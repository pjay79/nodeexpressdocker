const express = require('express');
const router = express.Router();
const app = express();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const contactController = require('../controllers/contactController');

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Node.js Express REST API Docs",
      version: "1.0.0",
      description:
        "Contacts API documentation for endpoints",
      license: {
        name: "MIT",
        url: "https://choosealicense.com/licenses/mit/"
      },
      contact: {
        name: "Praveen Jayarajan",
        url: "https://praveen-jayarajan.squarespace.com",
        email: "praveen.jayarajan@gmail.com"
      }
    },
    servers: [
      {
        url: "http://localhost:3000/api/v1"
      }
    ]
  },
  apis: []
};

const specs = swaggerJsdoc(options);

router.use('/docs', swaggerUi.serve);
router.get('/docs', swaggerUi.setup(specs, { explorer: true }));
router.get('/', (req, res) => res.status(200).send('Node Express API'));
router.get('/contact', contactController.allContacts);
router.post('/contact', contactController.createContact);
router.get('/contact/:contactId', contactController.getContact);
router.put('/contact/:contactId', contactController.updateContact);
router.delete('/contact/:contactId', contactController.deleteContact);

module.exports = router;