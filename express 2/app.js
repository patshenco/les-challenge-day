const express = require('express');
const app = express();
// GET /products: This route should return a list of all products





// GET request to retrieve a specific product by ID
app.get('/products/:id', (req, res) => {
  const productId = req.params.id;
  // Use the productId to fetch the corresponding product from the database
  // Return the product information as the response
  res.send(`Product ID: ${productId}`);
});

// GET request to search for products based on query parameters
app.get('/products', (req, res) => {
  const searchQuery = req.query.q;
  const minPrice = req.query.minPrice;
  const maxPrice = req.query.maxPrice;
  // Use the searchQuery, minPrice, and maxPrice to perform a search in the database
  // Return the search results as the response
  res.send(`Search Query: ${searchQuery}, Min Price: ${minPrice}, Max Price: ${maxPrice}`);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});