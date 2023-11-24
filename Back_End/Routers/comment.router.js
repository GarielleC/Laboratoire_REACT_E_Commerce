//Importations
const commentController = require('../Controllers/comment.controller');
const commentRouter = require('express').Router(); //Permet de crée une nouvelle instance de routeur Express et la stocke dans la variable authRouter
const commentValidator = require('../validators/comment.validator')


commentRouter.route('/create')
    .post(commentValidator, commentController.createComment)
    .all((res, req) => {
        res.statusCode(405).send('Unavailable')
    });



commentRouter.route('/delete/:id')
    .delete(commentController.deleteComment)
    .all((res, req) => {
        res.statusCode(405).send('Unavailable');
    });

    commentRouter.route('/update/:id')
    .put(commentController.updateComment)
    .all((res, req) => {
        res.statusCode(405).send('Unavailable')
    });

module.exports = commentRouter;