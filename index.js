const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
let country = require("country-state-city").Country;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "./public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.get("/home", async (req, res) => {
  let countries = await country.getAllCountries();
  res.render("home.ejs", { countries });
});

app.listen(port, () => {
  console.log(`listening port at : ${port}`);
});
