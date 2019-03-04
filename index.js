const express = require('express');
const axios = require('axios');
const {PORT} = require('./src/constants');
const { findProduct, queryProducts } = require('./src/products');
require('dotenv').load();

const app = express();

// allow cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/api/items", async (req, res) => {
  const response = await queryProducts(req.query);
  res.json(response);
});

app.get('/api/:id', async (req, res) => {
  const response = await findProduct(req.params.id);
  res.json(response);
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});