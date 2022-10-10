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
    <div className="comment">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            value={textInput}
            onChange={(event) => {
              setTextInput(event.target.value);
            }}
            required
          ></input>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CreateComment;
