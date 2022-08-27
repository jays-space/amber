const apiDoc = {
  openapi: "3.0.0",
  info: {
    title: "AMBER SOFTWARE EMPLOYEES REST API",
    description:
      "This API allows getting the employee details of amber software employees\n",
    version: "1.0",
    contact: {
      name: "Jay Mondlana",
      email: "contact.jays.space@gmail.com",
      url: "https://jays-space.vercel.app/",
    },
    license: {
      name: "License (MIT, Apache 2.0, etc)",
      url: "https://www.apache.org/licenses/LICENSE-2.0.html",
    },
    servers: [
      {
        url: "/api/v1",
      },
    ],
  },
  paths: {
    "/employees": {
      get: {
        summary: "Get employees",
        operationId: "getEmployees",
        description: "Retrieves all employees in the database.",
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Employee",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Employee: {
        title: "Employee",
        type: "object",
        description: "Details about an employee",
        additionalProperties: false,
        properties: {
          gender: {
            type: "string",
          },
          name: {
            type: "object",
            properties: {
              title: {
                type: "string",
              },
              first: {
                type: "string",
              },
              last: {
                type: "string",
              },
            },
          },
          location: {
            type: "object",
            properties: {
              street: {
                type: "object",
                properties: {
                  number: {
                    type: "number",
                  },
                  name: {
                    type: "string",
                  },
                },
              },
              city: {
                type: "string",
              },
              state: {
                type: "string",
              },
              country: {
                type: "string",
              },
              postcode: {
                type: "number",
              },
              coordinates: {
                type: "object",
                properties: {
                  latitude: {
                    type: "string",
                  },
                  longitude: {
                    type: "string",
                  },
                },
              },
              timezone: {
                type: "object",
                properties: {
                  offset: {
                    type: "string",
                  },
                  description: {
                    type: "string",
                  },
                },
              },
            },
          },
          email: {
            type: "string",
            format: "email",
          },
          login: {
            type: "object",
            properties: {
              uuid: {
                type: "string",
                description: "Unique login identifier for the given employee",
              },
              username: {
                type: "string",
              },
              password: {
                type: "string",
              },
              salt: {
                type: "string",
                description: "Salt encrypted version of the employee password",
              },
              md5: {
                type: "string",
                description: "MD5 encrypted version of the employee password",
              },
              sha1: {
                type: "string",
                description: "SHA1 encrypted version of the employee password",
              },
              sha256: {
                type: "string",
                description:
                  "SHA256 encrypted version of the employee password",
              },
            },
          },
          dob: {
            type: "object",
            properties: {
              date: {
                type: "string",
              },
              age: {
                type: "number",
              },
            },
          },
          registered: {
            type: "object",
            properties: {
              date: {
                type: "string",
              },
              age: {
                type: "number",
              },
            },
          },
          phone: {
            type: "string",
          },
          cell: {
            type: "string",
          },
          id: {
            type: "object",
            properties: {
              name: {
                type: "string",
              },
              value: {
                type: "string",
              },
            },
          },
          picture: {
            type: "object",
            properties: {
              large: {
                type: "string",
              },
              medium: {
                type: "string",
              },
              thumbnail: {
                type: "string",
              },
            },
          },
          nat: {
            type: "string",
          },
        },
      },
    },
  },
};

module.exports = apiDoc;
