const { CountryGetController } = require("../controllers/countryController");

const CountyRouter = require("express").Router();

CountyRouter.get("/", CountryGetController);

module.exports = CountyRouter;
