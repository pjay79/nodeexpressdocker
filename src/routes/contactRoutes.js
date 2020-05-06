const express = require('express');
const router = express.Router();
const app = express();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../apiDocs/swagger');
const contactController = require('../controllers/contactController');

const specs = swaggerJsdoc(swaggerSpec);

router.use('/docs', swaggerUi.serve);
router.get('/docs', swaggerUi.setup(specs, { explorer: true }));
router.get('/', (req, res) => res.status(200).send('Node Express API'));
router.get('/contact', contactController.allContacts);
router.post('/contact', contactController.createContact);
router.get('/contact/:contactId', contactController.getContact);
router.put('/contact/:contactId', contactController.updateContact);
router.delete('/contact/:contactId', contactController.deleteContact);

module.exports = router;