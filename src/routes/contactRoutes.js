const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.get('/', (req, res) => res.status(200).send('Node Express API'));
router.get('/contact', contactController.allContacts);
router.post('/contact', contactController.createContact);
router.get('/contact/:contactId', contactController.getContact);
router.put('/contact/:contactId', contactController.updateContact);
router.delete('/contact/:contactId', contactController.deleteContact);

module.exports = router;