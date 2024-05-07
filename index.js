const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const category = require("./data/category.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/categories", (req, res) => {
  res.send(category);
});

app.listen(port, () => {
  console.log("this app running port:", port);
});
