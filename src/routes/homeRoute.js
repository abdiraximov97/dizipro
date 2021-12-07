const { HomeGetController } = require("../controllers/homeController");

const HomeRouter = require("express").Router();

HomeRouter.get("/", HomeGetController);

module.exports = HomeRouter;