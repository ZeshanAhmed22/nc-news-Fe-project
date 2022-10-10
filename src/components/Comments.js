import { useEffect, useState } from "react";
import { getCommentsById } from "../api";
import { useParams } from "react-router-dom";
import CreateComment from "./CreateComment";

const Comments = () => {
  const { id } = useParams();
  const [articleComments, setArticleComments] = useState([]);

  useEffect(() => {
    getCommentsById(id).then((res) => {
      setArticleComments(res);
    });
  }, []);
  return (
    <div>
      <CreateComment setArticleComments={setArticleComments} id={id} />
      <ul className="comments-section">
        {articleComments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <h3>Author: {comment.author}</h3>
              <p className="body">{comment.body}</p>
              <div>
                <p>Posted on: {comment.created_at}</p>
                <p>Votes: {comment.votes}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
