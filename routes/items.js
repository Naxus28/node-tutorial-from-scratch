import express from 'express';
const app = express();
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
});


// define the home page route
// http://localhost:3000/items--on index.js we define /items as the path to this route
router.route('/')
  .get((req, res) => res.send('Get request on /items'))
  .post((req, res) => {
    console.log('content-type:', req.headers['content-type']); 
    console.log('content:', req.body); 
    res.send(req.body);
  })
  .put((req, res) => res.send('Put request on /items'))
  .delete((req, res) => res.send('Delete request on /items'))


module.exports = router;