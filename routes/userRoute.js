const userController = require("../controllers/userController");

const UserRouter = require("express").Router();

UserRouter.post("/account", userController.UserCreateAccountPostController)

module.exports = UserRouter;