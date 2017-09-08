const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redisConfig = require('config')['redis'];
const redisClient = require('redis').createClient(redisConfig.url);
module.exports.verify = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

module.exports.session = session({
  store: new RedisStore({
    client: redisClient,
    host: redisConfig.host,
    port: redisConfig.port
  }),
  secret: redisConfig.secret,
  resave: false,
  saveUninitialized: false
});
