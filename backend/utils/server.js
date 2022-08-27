const express = require("express");
const OpenApiValidator = require("express-openapi-validator");
const { connector, summarise } = require("swagger-routes-express");
const YAML = require("yamljs");

const api = require("../api/controllers");

const createServer = async () => {
  const apiSpec = "./config/openapi.yml";
  const apiDefinition = YAML.load(apiSpec);
  const apiSummary = summarise(apiDefinition);
  console.info(apiSummary);

  const server = express();

  const options = {
    apiSpec,
    validateRequests: true,
    validateResponses: true,
  };

  server.use(OpenApiValidator.middleware(options));

  const connect = connector(api, apiDefinition, {
    onCreateRoute: (method, descriptor) => {
      console.log(`${method}: ${descriptor[0]} : ${descriptor[1].name}`);
    },
  });

  connect(server);

  server.use((err, req, res, next) => {
    res.status(err.status).json({
      error: {
        type: "request_validation",
        message: err.message,
        errors: err.errors,
      },
    });
  });

  return server;
};

module.exports = createServer;
