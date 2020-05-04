const express = require('express');
const cors = require('cors');
const app = express();
const contactRouter = require('./src/routes/contactRoutes');

const PORT = 8080;

app.use(express.static(__dirname));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', contactRouter)

app.listen(PORT, () => {
  console.log('Server running successfully');
});