const { generateCrypt } = require("../modules/bcrypt");

module.exports = class UserController {
	static async UserCreateAccountPostController(req, res, next) {
		try {
			const user = await req.db.users.create({
				...req.body,
				user_password: generateCrypt(req?.body?.user_password)
			});

			console.log(user);
		} catch (error) {
			if(error?.message.startsWith("notNull Violation")) {
				error.code = 400;
				error.message = "Country is invalid";
			}
			console.log(error + "");
			next(error);
		}
	}
};
