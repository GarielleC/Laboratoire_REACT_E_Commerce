// Importation
const { Sequelize, DataTypes } = require('sequelize');

/**
 * Fonction pour créer un model Advice (donc table de db)
 * Le JSDoc sert à l'autocomplétion
 * @param {Sequelize} sequelize
 * @returns {import('sequelize').ModelCtor<import('sequelize').Model<any, any>>}
 */
const createComment = (sequelize) => {
    // Définition du modèle (table)
    const Comment = sequelize.define('Comment', {
        // L'id se crée automatiquement si non spécifié ici
        prenom: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },

        nom: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },

        note: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        
        message: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        // Options de création propre à Sequelize 
        createdAt: true,  
        tableName: 'Comment'
    });

    return Comment;
};

module.exports = createComment;