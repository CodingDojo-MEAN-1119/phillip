const router = require('express').Router();
const apiRouter = require('express').Router();

const catchAllRoutes = require('./catch-all-routes.js');
const CakeRoutes = require('./cake.routes');

// /api/auth/login

router
  .use('/cakes', CakeRoutes);

module.exports = apiRouter.use('/api', router).use(catchAllRoutes);
