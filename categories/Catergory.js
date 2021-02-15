const Sequelize = require('sequelize');
const connection = require('../database/connection');

const Category = connection.define('categories', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// excutar o sync uma vez
// Category.sync({ force: true })

module.exports = Category;