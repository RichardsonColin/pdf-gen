require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();
// middleware requires
const cors = require('cors');
const bodyParser = require('body-parser');
const middlewares = require('./middlewares/middlewares.js');
// route requires
const apiRoutes = require('./routes/api');
//middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(middlewares.checkAPIKey);

// routes
app.use(apiRoutes);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});