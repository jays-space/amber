const createServer = require("./utils/server");

require('dotenv').config()
const port = process.env.PORT;

// initialize server and maintain
createServer()
  .then((server) => {
    server.listen(port, () => {
      console.info(`Listening on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error(`Error: ${err}`);
  });
