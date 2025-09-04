const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Quote API",
      version: "1.0.0",
      description: "A simple API that returns random inspirational quotes with IP-based rate limiting",
    },
    servers: [
      { url: "http://localhost:3000" }
    ],
  },
  apis: ["./src/routes/*.js"],  
};

const specs = swaggerJsdoc(options); 



function setupSwagger(app) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs)); 
}
 
module.exports = setupSwagger;
