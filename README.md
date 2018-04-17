# http endpoint test with  [supertest](https://github.com/visionmedia/supertest)

Supertest is a module that helps us test http applications, such as those built with node-express. Tests should be ran from the root of the test directory to pick up the home route '/', which is served via the express static method. All other tests work fine from outside the test root directory, except the test for the home route. 

```bash
cd test

 $ mocha app.spec 
```
