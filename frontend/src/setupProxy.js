const proxy = require("http-proxy-middleware");

const path = process.env.API_ENDPOINT || 'localhost'


module.exports = function(app) {
  app.use(proxy("/auth/local", { target: `http://${path}:5000` }));
  app.use(proxy("/auth/login", { target: `http://${path}:5000` }));
  app.use(
    proxy("/api/", {
      target: `http://${path}:5000`
    })
  );
};
