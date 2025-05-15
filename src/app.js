const express = require("express");
const setupRoutes = require("./routes/index");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

setupRoutes(app);

app.listen(PORT, () => {
  console.log(`Server CANARY is running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the S1 CANARY API",
    headers: req.headers,
  });
});
