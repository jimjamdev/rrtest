const blog = require('./blog/blog.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(blog);
};
