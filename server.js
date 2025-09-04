const express = require("express");
const quoteRoutes = require("./src/routes/quoteRoutes");
const setupSwagger = require("./src/swagger");

const app = express();
const PORT = process.env.PORT || 3000;



app.use("/api", quoteRoutes);


setupSwagger(app);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger Docs: http://localhost:${PORT}/api-docs`);
});
