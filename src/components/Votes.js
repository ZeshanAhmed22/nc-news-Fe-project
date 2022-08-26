import React, { useState } from "react";
import { patchArticleVotes } from "../api";
import { IoMdThumbsUp, IoMdThumbsDown } from "react-icons/io";

const Votes = ({ voteCount, articleId }) => {
  const [storedVotes, setStoredVotes] = useState(voteCount);
  const originalVotes = voteCount;
  const [addToggled, setAddToggled] = useState(false);
  const [minusToggled, setMinusToggled] = useState(false);

  const addVotes = () => {
    if (addToggled) {
      setStoredVotes((currVotes) => currVotes - 1);
      patchArticleVotes(articleId, -1);
      setAddToggled(false);
    } else if (originalVotes === storedVotes) {
      setStoredVotes((currVotes) => currVotes + 1);
      patchArticleVotes(articleId, 1);
      setAddToggled(true);
    } else if (originalVotes === storedVotes + 1) {
      setStoredVotes((currVotes) => currVotes + 2);
      patchArticleVotes(articleId, 2);
      setAddToggled(true);
    }
    setMinusToggled(false);
  };
  const decreaseVotes = () => {
    if (minusToggled) {
      setStoredVotes((currVotes) => currVotes + 1);
      patchArticleVotes(articleId, 1);
      setMinusToggled(false);
    } else if (originalVotes === storedVotes) {
      setStoredVotes((currVotes) => currVotes - 1);
      patchArticleVotes(articleId, -1);
      setMinusToggled(true);
    } else if (originalVotes === storedVotes - 1) {
      setStoredVotes((currVotes) => currVotes - 2);
      patchArticleVotes(articleId, -2);
      setMinusToggled(true);
    }
    setAddToggled(false);
  };

  return (
    <div>
      <button onClick={addVotes}>
        <IoMdThumbsUp />
      </button>
      <h2>Votes: {storedVotes}</h2>
      <button onClick={decreaseVotes}>
        <IoMdThumbsDown />
      </button>
    </div>
  );
};

export default Votes;
