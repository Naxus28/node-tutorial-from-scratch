# express.Router()

Express Router allows us to create modular routes

```javascript
// routes/catalog.js
import express from 'express';
const app = express();
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route
router.get('/', (req, res) => res.send('Catalog page'))

// define the about route
router.get('/items', (req, res) => res.send('Items in catalog'));

module.exports = router

// index.js
import catalog from './routes/catalog';

app.use('/catalog', catalog);

```

Start the server using `npm start`







