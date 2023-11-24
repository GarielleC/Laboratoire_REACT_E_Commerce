import React from 'react';
import { Rating } from 'react-simple-star-rating';
import { Link } from 'react-router-dom';


function CommentList({ commentaires }) {
    return (
        <article className="comment">
            <Link to="/AddComment">
        ⬅ Retour
            </Link>
            <h1>Commentaires clients</h1>

            <div className="carre">
                <ul>
                    {commentaires && commentaires.length > 0 ? (
                        commentaires.map((comment, index) => (
                            <li key={index}>
                                {comment.Prenom} {comment.Nom} :{' '}
                                <Rating value={comment.Note} count={5} size={24} edit={false} />
                                <p>Commentaire de cette personne :</p>
                                <p>{comment.Message}</p>
                            </li>
                        ))
                    ) : (
                        <p>Aucun commentaire disponible pour le moment.</p>
                    )}
                </ul>
            </div>
        </article>
    );
}

export default CommentList;
