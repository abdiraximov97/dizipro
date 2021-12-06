module.exports = async (sequelize, Sequelize) => {
    return await sequelize.define("countries", {
        country_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
        },

        country_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        country_code: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    });
};