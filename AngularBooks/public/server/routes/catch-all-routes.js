const router = require('express').Router();
const path = require('path');

module.exports = router.all('*', function(req,resp){
  console.log('caught route', req.url);

  const filePath = path.resolve('dist/public/index.html');
  resp.sendFile(filePath);
});
