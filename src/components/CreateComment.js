import { postCommentsById } from "../api";
import React, { useState } from "react";

const CreateComment = ({ id }) => {
  const [textInput, setTextInput] = useState("");
  console.log("teststst");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTextInput("");
    // postCommentsById(id, "guest", textInput).then(() => {
    //   setTextInput("")
    // })
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
