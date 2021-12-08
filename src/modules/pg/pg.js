const { Sequelize } = require("sequelize");
const init = require("./init");
const { sequelizeJoi, Joi } = require("sequelize-joi");
const countryModel = require("../../models/countryModel");
const {CustomError} = require("../../helpers/customError");
const userModel = require("../../models/userModel");
const relation = require("../../models/relation");

if(!process.env.PG_CONNECT_URL) {
    throw new Error("PG CONNECTION STRING NOT FOUND");
};

const sequelize = new Sequelize(process.env.PG_CONNECT_URL, {
    logging: false,
});

sequelizeJoi(sequelize);

module.exports = async function pg() {
    try {
        await sequelize.authenticate();
        let db = {};
        db.countries = await countryModel(sequelize, Sequelize, Joi, CustomError);
        db.users = await userModel(sequelize, Sequelize, Joi, CustomError);
        await relation(db);
        await sequelize.sync({
            force: true
        });
        await init(db);
        return db;
    } catch (error) {
        console.log("SequlelizeError: ", error);
    }
}