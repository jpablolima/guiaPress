const Sequelize = require('sequelize');
const connection = require('../database/connection');
const Category = require('../categories/Catergory');

const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});


// Relacionando tabelas 
Category.hasMany(Article);
Article.belongsTo(Category);

// Sincronizar o relacionamento no DB

// excutar o sync uma vez
// Article.sync({ force: true });

module.exports = Article;