module.exports = async (sequelize, Sequelize, Joi, CustomError) => {
    return await sequelize.define("users", {
        user_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },

        user_name: {
            type: Sequelize.STRING,
            allowNull: false,
            schema: Joi.string().min(4).max(64).required().error(new CustomError(400, "Name is invalid!")),
        },

        user_email: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
            schema: Joi.string().email().lowercase().required().error(new CustomError(400, "Email is invalid!")),
        },

        user_gender: {
            type: Sequelize.ENUM,
            values: ["male", "female"],
            allowNull: false,
            schema: Joi.string().valid("male", "female").required().error(new CustomError(400, "Gender is invalid!")),
        },

        user_password: {
            type: Sequelize.STRING,
            allowNull: false,
            schema: Joi.string().min(4).required().error(new CustomError(400, "Password is invalid!")),
        },
    });
};