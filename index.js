const app = require("express")();
const creds = require("./nodemon.json");

app.get("/", (req, res) => {
  res.json(creds);
  console.log("hiii");
});

app.listen(5000, (req, res) => {
  console.log("server listening on port 3000");
});
