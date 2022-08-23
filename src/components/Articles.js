import React, { useEffect, useState } from "react";

import fetchArticles from "./api";
const Articles = () => {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    setArticleList([]);
    fetchArticles().then((articles) => {
      setArticleList(articles.article);
    });
  }, []);

  return (
    <>
      <div>
        <ul>
          {articleList.map((article) => {
            return (
              <li key="articleInfo">
                <div className="articles">
                  <h2>{article.title}</h2>
                  <h3>Author: {article.author}</h3>

                  <h3>Topic: {article.topic}</h3>
                  <h3>Votes: {article.votes}</h3>
                  <h3>Comments: {article.comment_count}</h3>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Articles;
