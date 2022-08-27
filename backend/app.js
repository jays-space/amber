const createServer = require("./utils/server");

require("dotenv").config();
const port = process.env.PORT;

createServer()
  .then((server) => {
    server.listen(port, () => {
      console.info(`Listening on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error(`Error: ${err}`);
  });
