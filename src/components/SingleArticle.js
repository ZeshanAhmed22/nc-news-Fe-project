import React, { useEffect, useState } from "react";
import { getArticleById } from "../api";
import { useParams } from "react-router-dom";
import Votes from "./Votes";
import Comments from "./Comments";

const SingleArticle = () => {
  const { id } = useParams();

  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticleById(id).then((res) => {
      setArticle(res[0]);
    });
  }, []);

  return (
    <div className="single-article-container">
      <div key={article.article_id} className="single-article">
        <li>
          <h2 className="background-blue">{article.title}</h2>

          <h3>Author: {article.author}</h3>
          <h3>Topic: {article.topic}</h3>
          <p className="text-left">{article.body}</p>

          <Votes voteCount={article.votes} articleId={article.article_id} />

          <h3>
            Posted at: {new Date(article.created_at).toLocaleDateString()}
          </h3>
          <h3> Comments: {article.comment_count}</h3>
        </li>
      </div>
      <div className="comments">
        <h3>Add Comment:</h3>
        <Comments articleId={article.article_id} />
      </div>
    </div>
  );
};

export default SingleArticle;
