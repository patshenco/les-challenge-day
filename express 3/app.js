const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

let products = [
  { id: 1, name: 'iPhone 12 Pro', price: 1099.99 },
  { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
  { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
  { id: 4, name: 'MacBook Pro 16', price: 2399.99 },
  { id: 5, name: 'DJI Mavic Air 2', price: 799.99 },
];
// get products
app.get('/products', (req, res) => {
  res.json(products);
});
// get products byID
app.get('/products/:id', (req, res) => {
  const findProduct = products.find(element => element.id == req.params.id);
  if (findProduct) {
    res.send(findProduct);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Route to search for products 
app.get('/products/search/item', (req, res) => {
  const { q, minPrice, maxPrice } = req.query;
  let filteredProducts = products;

  if (q) {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(q.toLowerCase())
    );
  }

  if (minPrice) {
    filteredProducts = filteredProducts.filter(product =>
      product.price >= parseFloat(minPrice)
    );
  }

  if (maxPrice) {
    filteredProducts = filteredProducts.filter(product =>
      product.price <= parseFloat(maxPrice)
    );
  }

  res.json(filteredProducts);
});
// get post
app.post('/products', (req, res) => {
  const product = {
    id: req.body.id,
    name: req.body.name,
    price: req.body.price,
  };
  products.push(product);
  res.json(product);

});
//  put
app.put('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const updatedProduct = req.body;

  const index = products.findIndex(product => product.id === productId);

  if (index !== -1) {
    
    products[index] = { ...products[index], ...updatedProduct };
    res.json(products[index]);
  } else {
    
    res.status(404).json({ message: 'Product not found' });
  }
});
// delete
app.delete('/products/:id', (req, res)=>{
const findProduct = products.find(element => element.id == req.params.id)
if(!findProduct){
  return res.send("this product not found!!");
};
const productIndex = products.indexOf(findProduct);
products.splice(productIndex,1);
res.send(findProduct);

});


app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
