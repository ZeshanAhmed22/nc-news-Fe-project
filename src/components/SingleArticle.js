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
      <div key={article.article_id} className="article-container">
        <li>
          <h1>{article.title}</h1>
          <h2>Author: {article.author}</h2>
          <h2>Topic: {article.topic}</h2>
          <h2>Body: {article.body}</h2>

          <Votes voteCount={article.votes} articleId={article.article_id} />

          <h2> Posted at: {article.created_at}</h2>
          <h2> Comments: {article.comment_count}</h2>
          <h1>All Comments</h1>
          <Comments articleId={article.article_id} />
        </li>
      </div>
    </div>
  );
};

export default SingleArticle;
