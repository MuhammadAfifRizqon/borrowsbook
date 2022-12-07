import Sequelize from "sequelize";
import config from "../../config/config";

const sequelize = new Sequelize(
  config.db_name,
  config.db_username,
  config.db_password,
  {
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

const DataTypes = require("sequelize").DataTypes;
const _books = require("./books");
const _members = require("./members");

function initModels(sequelize) {
  const books = _books(sequelize, DataTypes);
  const members = _members(sequelize, DataTypes);


  return {
    books,
    members,
  };
}
const models = initModels(sequelize);
export default models;
export { sequelize };
