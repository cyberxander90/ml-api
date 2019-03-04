const express = require('express');
const axios = require('axios');
const {PORT} = require('./src/constants');
const { findProduct, queryProducts } = require('./src/products');
require('dotenv').load();

const app = express();

// const queryProducts = async () => {
//   const resp = await axios.get(`https://api.mercadolibre.com/items/MLA749325859/`)
//   return resp.data;
// } 

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