const axios = require('axios');
const { BASE_API_URL } = require('./constants');

module.exports.findCategory = async (categoryId) => {
  return (await axios.get(`${BASE_API_URL}/categories/${categoryId}`))
    .data;
}