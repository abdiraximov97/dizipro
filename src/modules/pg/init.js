module.exports = async function init(db) {

    await db.countries.create();
}