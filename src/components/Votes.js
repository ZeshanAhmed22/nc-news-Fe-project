import React, { useState } from "react";
import { patchArticleVotes } from "../api";
import { IoMdThumbsUp, IoMdThumbsDown } from "react-icons/io";
import { IconContext } from "react-icons";

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
    <IconContext.Provider value={{ color: "white", size: "40px" }}>
      <div className="votes">
        <button className="add-vote" onClick={addVotes}>
          <IoMdThumbsUp fill="white" />
        </button>
        <h3>Votes: {storedVotes}</h3>
        <button className="decrease-vote" onClick={decreaseVotes}>
          <IoMdThumbsDown fill="white" />
        </button>
      </div>
    </IconContext.Provider>
  );
};

export default Votes;
