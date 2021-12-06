const { Sequelize } = require("sequelize");
const { sequelizeJoi, Joi } = require("sequelize-joi");
const countryModel = require("../../models/countryModel");
const init = require("./init");

if(!process.env.PG_CONNECT_URL) {
    throw new Error("PG CONNECTION STRING NOT FOUND");
};

const sequelize = new Sequelize(process.env.PG_CONNECT_URL, {
    logging: false,
});

module.exports = async function pg() {
    try {
        await sequelize.authenticate();
        let db = {};
        db.countries = await countryModel(sequelize, Sequelize);
        await init(db);
        await sequelize.sync({
            force: true
        });
    } catch (error) {
        console.log("SequlelizeError: ", error);
    }
}