const postgresPW = require("./config.js");

const Sequelize = require("sequelize");

const user = "postgres";
const password = postgresPW.password;
const host = "localhost";
const database = "testingpassport";
const sequelize = new Sequelize(database, user, password, {
  host,
  dialect: "postgres",
  logging: false,
})

module.exports = sequelize;