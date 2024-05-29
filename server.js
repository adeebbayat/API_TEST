const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  });
});

app.get("/adeeb", (req, res) => {
  res.json({ firstName: "Adeeb", lastName: "Bayat" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
