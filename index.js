const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "./public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.get("/home", (req, res) => {
  res.render("home.ejs");
});

app.listen(port, () => {
  console.log(`listening port at : ${port}`);
});
