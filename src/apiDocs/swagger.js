module.exports = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Node.js Express REST API Docs",
      version: "1.0.0",
      description:
        "Contacts API documentation for endpoints",
      license: {
        name: "MIT",
        url: "https://choosealicense.com/licenses/mit/"
      },
      contact: {
        name: "Praveen Jayarajan",
        url: "https://praveen-jayarajan.squarespace.com",
        email: "praveen.jayarajan@gmail.com"
      }
    },
    servers: [
      {
        url: "http://localhost:8080"
      }
    ]
  },
  apis: []
};