const CustomError = require("../helpers/customError");

module.exports.customErrorMiddleware = function customErrorMiddleware(
	req,
	res,
	next
) {
	res.error = CustomError;
	next();
};
