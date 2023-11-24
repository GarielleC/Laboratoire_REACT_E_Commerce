const Comment = require('../Models').Comment; 
const commentValidator = require('../validators/comment.validator');

const createComment = async (req, res) => {
    try {
        const { nom, prenom, note, message } = req.body;

        const newComment = await Comment.create({ nom, prenom, note, message });
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};




// Méthode pour supprimer un commentaire
const deleteComment = async (req, res) => {
    try {
        const commentId = req.params.id;
        const comment = await Comment.findByPk(commentId);
        if (!comment) {
            return res.status(500).json({ message: 'Commentaire non trouvé' });
        }
        await comment.destroy();
        res.status(200).json({ message: 'Commentaire supprimé' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Méthode pour modifier un commentaire
const updateComment = async (req, res) => {
    try {
        const commentId = req.params.id;
        const { nom, prenom, note, message } = req.body;
        const comment = await Comment.findByPk(commentId);
        if (!comment) {
            return res.status(500).json({ message: 'Commentaire non trouvé' });
        }
        comment.nom = nom;
        comment.prenom = prenom;
        comment.note = note;
        comment.message = message;
        await comment.save();
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createComment,
    deleteComment,
    updateComment
}; 

