const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();

server.use(middleware);

server.use(
  jsonServer.rewriter({
    "/api/*": "$1",
  })
);
server.use(router);
const port = 3001;
server.listen(port, () => {
  console.log("server is listening on ", port);
});

module.exports = server;
