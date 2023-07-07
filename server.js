const express = require('express');
const bodyParser = require('body-parser');
const calculatorRoutes = require('./src/routes/calculatorRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/calculator', calculatorRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
