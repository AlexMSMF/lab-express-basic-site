const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("views", __dirname + "/views");

app.get("/", (request, response, next) => {
  response.sendFile(__dirname + "/views/home-page.html");
});

app.listen(3000, () => {
  console.log("Starting the app");
});
