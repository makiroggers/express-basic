const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("It worked! My name is Maki.");
});

app.listen(3000);
