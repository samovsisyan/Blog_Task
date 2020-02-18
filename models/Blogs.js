const Sequelize = require('sequelize');
const sequelize = require('../services/database');

class Blogs extends Sequelize.Model{

}

Blogs.init({
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

Blogs.sync();

module.exports = Blogs;
