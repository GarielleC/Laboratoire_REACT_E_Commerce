const yup = require('yup');

// Définie le schéma de validation pour le commentaire avec des messages d'erreur personnalisés
const commentSchema = yup.object({
    nom: yup.string()
        .min(3, 'Le nom doit avoir au moins 3 caractères')
        .max(50, 'Le nom ne peut pas dépasser 50 caractères')
        .required('Le nom est obligatoire'),
    prenom: yup.string()
        .min(3, 'Le prénom doit avoir au moins 3 caractères')
        .max(50, 'Le prénom ne peut pas dépasser 50 caractères')
        .required('Le prénom est obligatoire'),
    note: yup.number()
        .required('La note est obligatoire')
        .typeError('La note doit être un nombre'),
    message: yup.string()
        .min(10, 'Le message doit avoir au moins 10 caractères')
        .max(500, 'Le message ne peut pas dépasser 500 caractères')
        .required('Le message est obligatoire'),
});

// Middleware pour valider le commentaire
const commentValidator = async (req, res, next) => {
    try {
        await commentSchema.validate(req.body, { abortEarly: false });
        next();
    } catch (error) {
        const errors = error.inner.map(err => ({
            field: err.path,
            message: err.message
        }));
        res.status(400).json({ errors });
    }
};

module.exports = commentValidator;

