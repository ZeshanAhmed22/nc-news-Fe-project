import { postCommentsById } from "../api";
import React, { useState } from "react";

const CreateComment = ({ id, setArticleComments }) => {
  const [textInput, setTextInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    postCommentsById(id, "grumpy19", textInput).then((newComment) => {
      setArticleComments((currComment) => [...currComment, newComment]);
      setTextInput("");
    });
  };

  return (
    <div className="create-comment">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            className="cooment-box"
            value={textInput}
            onChange={(event) => {
              setTextInput(event.target.value);
            }}
            required
          ></input>
        </label>
        <div>
          <input className="submit" type="submit" value="POST" />
        </div>
      </form>
    </div>
  );
};

export default CreateComment;
