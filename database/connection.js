const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('link com bacndo de dados aqui', {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = sequelize;
