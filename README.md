# get parameters from url with `req.params`

Params are included in the api path as such: '/:param'.

e.g.

```javascript
import users from './data/users'; // our users mock array
import _ from 'lodash';

app.get('users/:id', (req, res) => {
  // if lodash is not used this can be replaced with a regular Array.prototype.filter method
  let user = _.find(users, { id: parseInt(req.params.id) }); 
  res.send(user);
});
```






