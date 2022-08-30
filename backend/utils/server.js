const express = require("express");
const OpenApiValidator = require("express-openapi-validator");
const { connector, summarise } = require("swagger-routes-express");
const YAML = require("yamljs");
const cors = require("cors");

const api = require("../api/controllers");

/***
 * Creates an express app by using the openAPI specification document
 * Handles error logs if there are any errors
 */

const createServer = async () => {
  // get constants and functions
  const apiSpec = "./config/openapi.yml";

  // load api specification
  const apiDefinition = YAML.load(apiSpec);

  // logs out summary of the api
  const apiSummary = summarise(apiDefinition);
  console.info(apiSummary);

  const server = express();

  // validator options
  const options = {
    apiSpec,
    validateRequests: true,
    validateResponses: true,
  };

  // logs out current api resource and action on that resource
  const connect = connector(api, apiDefinition, {
    onCreateRoute: (method, descriptor) => {
      console.log(`${method}: ${descriptor[0]} : ${descriptor[1].name}`);
    },
  });

  connect(server);

  server.use(cors());
  server.use(OpenApiValidator.middleware(options));

  // custom error messaging
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
