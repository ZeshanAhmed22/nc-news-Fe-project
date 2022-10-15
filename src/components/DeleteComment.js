import { deleteComment } from "../api";

const DeleteComment = ({ articleComments, commentId, setArticleComments }) => {
  const deleteHandler = () => {
    const filteredComments = articleComments.filter((comment) => {
      return comment.comment_id !== commentId;
    });
    setArticleComments(filteredComments);
    deleteComment(commentId);
  };

  return (
    <div onClick={deleteHandler}>
      <button className="delete">Delete</button>
    </div>
  );
};

export default DeleteComment;
