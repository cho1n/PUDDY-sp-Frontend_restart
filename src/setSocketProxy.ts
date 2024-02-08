const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app: any) => {
  app.use(
    "/ws",
    createProxyMiddleware({
      target: import.meta.env.VITE_SERVER_HOST,
      ws: true,
    })
  );
};
