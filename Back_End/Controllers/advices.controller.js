// Importation du modèle Advice
const Advices = require('../Models').Advices;
const Comments = require('../Models').Comment;

const advicesController = {
    getAllAdvices: async (req, res) => {
        try {
            // Récupérer tous les advices (commentaires) existants
            const existingAdvices = await Comments.findAll();

            // Répondre avec les advices (commentaires) existants
            res.status(200).json(existingAdvices);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = advicesController;