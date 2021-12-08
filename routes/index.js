const Router = require("express").Router();

const CountyRouter = require("./countryRoute");
const HomeRouter = require("./homeRoute");

Router.use("/", HomeRouter);
Router.use("/countries", CountyRouter);

module.exports = Router;
