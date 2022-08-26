import { postCommentsById } from "../api";

const CreateComment = ({ setArticleComments, id }) => {
  const commentHandler = (event) => {
    event.preventDefault();
    postCommentsById(id, event.target.comment.value).then((res) => {
      setArticleComments((currentComments) => [res, ...currentComments]);
      event.target.comment.value = "";
    });
  };
  return (
    <div className="comment">
      <form onSubmit={commentHandler}>
        <label>
          <input
            type="text"
            id="comment"
            placeholder="Type comment here ..."
            required
          ></input>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateComment;
