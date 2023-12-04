import React, { useState, useEffect } from 'react';
import { Rating } from 'react-simple-star-rating';
import { Link } from 'react-router-dom';
import { getAllAdvices } from '../../components/servcies/api';
import './comment.scss';

function CommentList() {
  const [commentList, setCommentList] = useState([]);

  const getComments = async () => {
    try {
      const res = await getAllAdvices();
      console.log(res); 
      if (res) {
        setCommentList(res);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <article className="comment">
      <Link to="/AddComment" className="Retour">⬅ Retour</Link>
      <h1>Commentaires clients</h1>

      <div className="carre">
        <ul>
          {commentList && commentList.length > 0 ? (
            commentList.map((comment, index) => (
              <li key={index}>
                {comment.prenom} {comment.nom} :{' '}
                <Rating
                  readonly
                  initialValue={comment.note}
                  emptySymbol={<span className="icon">&#9734;</span>}
                  fullSymbol={<span className="icon">&#9733;</span>}
                />
                <p>Commentaire :</p>
                <p>{comment.message}</p>
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