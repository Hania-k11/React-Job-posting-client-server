const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./jobs.json");

// Make sure to use the default middleware
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(
 jsonServer.rewriter({
  "/api/*": "/$1",
 })
);
server.use(router);
// Listen to port
server.listen(3000, () => {
 console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;

