const request = require("supertest");
const express = require("express");
const { connector } = require("swagger-routes-express");
const YAML = require("yamljs");
const cors = require("cors");

// import constants and functions
const apiUrl = "/api/v1/candidates";
const api = require("./api/controllers/index");
const candidateData = require("./constants/response");
const apiSpec = "./config/openapi.yml";

// load api specification
const apiDefinition = YAML.load(apiSpec);

const server = express();

server.use(cors());

// logs out current api resource and action on that resource
const connect = connector(api, apiDefinition, {
  onCreateRoute: (method, descriptor) => {
    console.log(`${method}: ${descriptor[0]} : ${descriptor[1].name}`);
  },
});

connect(server);

describe("Candidates API", () => {
  // The response contains the required data types and structure
  it("GET /candidates --> response object with results and info", async () => {
    await request(server)
      .get(apiUrl)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toStrictEqual(
          expect.objectContaining({
            results: expect.arrayContaining([expect.any(Object)]),
            info: expect.any(Object),
          })
        );
      });
  });

  it("GET /candidates --> results have returned the expected data", async () => {
    await request(server)
      .get(apiUrl)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toStrictEqual({
          results: [candidateData],
          info: {
            seed: "934a8f5063e7b2ec",
            results: 1,
            page: 1,
            version: "1.3",
          },
        });
      });
  });
});
