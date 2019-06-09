var express = require("express");
var path = require("path");
var htmlRoute = require("./app/routing/htmlRoutes")
var apiRoute = require("./app/routing/apiRoutes")


var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", htmlRoute)
app.use("/api", apiRoute)

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})