import express from 'express';
const app = express();
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route
// http://localhost:3000/catalog--on index.js we define /catalog as the path to this route
router.get('/', (req, res) => res.send('Catalog page'))

// define the about route
// http://localhost:3000/catalog/items
router.get('/items', (req, res) => res.send('Items in the Catalog'));

module.exports = router