const { Sequelize } = require("sequelize");
const { sequelizeJoi, Joi } = require("sequelize-joi");

if(!process.env.PG_CONNECT_URL) {
    throw new Error("PG CONNECTION STRING NOT FOUND");
};

const sequelize = new Sequelize(process.env.PG_CONNECT_URL, {
    logging: false,
})