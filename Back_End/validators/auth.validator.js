const yup = require('yup');

const { object } = require('yup');
const authValidator = object({
    // Validation du champ 'login'
    login: yup.string().min(6).max(50).required(), 
    
    // Validation du champ 'password'
    password: yup.string().min(12).max(50).matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/).required()
});

// Exportation du schéma de validation pour une utilisation externe
module.exports = authValidator;
