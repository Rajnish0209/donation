const express = require("express");
const app = express();
const path = require("path");
let Country = require('country-state-city').Country;
let State = require('country-state-city').State;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const countries = Country.getAllCountries();

app.get("/home", (req, res) => {
  res.render("home.ejs", { countries });
});

app.listen(8080, () => {
  console.log("listening on port : 8080");
});
