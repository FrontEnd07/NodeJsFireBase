const express = require('express');
const ejs = require('ejs');
const app = express();
const path = require('path')
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static('public'));
app.engine("html", require("ejs").renderFile);


//sign up route
app.get("/Signup", function (req, res) {
    res.render("signup.html");
});

//login route
app.get("/Login", function (req, res) {
    res.render("login.html");
});

//user profile route
app.get("/Profile", function (req, res) {
    res.render("profile.html");
});

app.get("/", function (req, res) {
    res.render("Signup.html");
});

async function startApp() {
    try {
        app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
    } catch (e) {
        console.log(e.message)
    }
}

startApp()