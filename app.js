const express = require('express');
const cors = require('cors');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./src/apiDocs/swaggerDoc.json');
const contactRouter = require('./src/routes/contactRoutes');

const options = {
  explorer: true
};
 
const PORT = 8080;

app.use(express.static(__dirname));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', contactRouter)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc, options));

app.listen(PORT, () => {
  console.log('Server running successfully');
});