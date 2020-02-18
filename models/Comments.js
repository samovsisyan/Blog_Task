const Sequelize = require('sequelize');
const sequelize = require('../services/database');

class Comments extends Sequelize.Model{

}

Comments.init({
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    user_id: {
        type: Sequelize.BIGINT,
        allowNull: true
    },
    blog_id: {
        type: Sequelize.BIGINT,
        allowNull: true
    },
    created_at: {
        type: Sequelize.STRING,
        allowNull: true,
    },



}, {
    sequelize,
    modelName: 'comments',
    timestamps: false
});


Comments.sync();

module.exports = Comments;
