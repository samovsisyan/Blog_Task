const Sequelize = require('sequelize');
const sequelize = require('../services/database');

class Blog extends Sequelize.Model{

}

Blog.init({
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: true

    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true

    },
    short_description: {
        type: Sequelize.STRING,
        allowNull: true

    },

    created_at: {
        type: Sequelize.STRING,
        allowNull: true,
        // defaultValue: Sequelize.NOW


    },
    img: {
        type: Sequelize.STRING,
        allowNull: true

    }


}, {
    sequelize,
    modelName: 'blog',
    timestamps: false
});

Blog.sync();

module.exports = Blog;
