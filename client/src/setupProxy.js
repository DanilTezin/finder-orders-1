const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(createProxyMiddleware('/api/vk/search', {target: 'http://localhost:5000/'}));
};