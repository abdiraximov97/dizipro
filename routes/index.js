const Router = require("express").Router();

const CountyRouter = require("./countryRoute");
const HomeRouter = require("./homeRoute");
const UserRouter = require("./userRoute");

Router.use("/", HomeRouter);
Router.use("/countries", CountyRouter);
Router.use("/users", UserRouter);

module.exports = Router;
