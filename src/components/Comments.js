import { useEffect, useState } from "react";
import { getCommentsById } from "../api";
import { useParams } from "react-router-dom";
import CreateComment from "./CreateComment";
import DeleteComment from "./DeleteComment";

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
      <div>
        <CreateComment setArticleComments={setArticleComments} id={id} />
      </div>
      <div>
        {articleComments.map((comment) => {
          return (
            <div key={comment.comment_id} className="comments-section">
              <li>
                <h3>Author: {comment.author}</h3>
                <p className="text-left">{comment.body}</p>
                <div>
                  <p>
                    Posted on:{" "}
                    {new Date(comment.created_at).toLocaleDateString()}
                  </p>
                  <p>Votes: {comment.votes}</p>
                </div>
                {comment.author === "grumpy19" ? (
                  <DeleteComment
                    articleComments={articleComments}
                    commentId={comment.comment_id}
                    setArticleComments={setArticleComments}
                  />
                ) : (
                  <></>
                )}
              </li>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
