const { DataTypes } = require('sequelize');
const sequelize = require('../../database/connection');

const UserClient = sequelize.define('userClient', {
  title: DataTypes.STRING,
  body: DataTypes.BLOB,
});

(async () => {
  await sequelize.sync({ force: true });
})();

module.exports = UserClient;
