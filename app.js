const express = require('express');
const exhbs = require('express-handlebars');
const products = require('./products.json');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.engine('hbs', exhbs({
  extname: 'hbs',
   })
);

// http://localhost:4444/
app.get('/', (req, res) => {
      res.render('home');
});

// http://localhost:4444/about
app.get('/about', (req, res) => {
   res.render('about', { cssFileName: 'about' });
});

// http://localhost:4444/products
app.get('/products', (req, res) => {
   res.render('products', { products, cssFileName: 'products' });
});

app.listen(4444, () => {
   console.log('Application server is running on port ${4444}');
})
