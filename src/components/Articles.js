import React, { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import { Link, useParams } from "react-router-dom";
import Orderby from "./OrderBy";
import Sortby from "./Sortby";

const Articles = () => {
  const [articleList, setArticleList] = useState([]);
  const { slug } = useParams();
  const [sortBy, setSortBy] = useState("created_at");
  const [orderBy, setOrderBy] = useState("DESC");

  useEffect(() => {
    fetchArticles(slug, sortBy, orderBy).then((articles) => {
      setArticleList(articles);
    });
  }, [orderBy, sortBy]);

  return (
    <>
      <Link className="topic-links" to="/topics">
        <h2>All Topics</h2>
      </Link>
      <Sortby setSortBy={setSortBy} />
      <Orderby setOrderBy={setOrderBy} />
      {articleList.map((article) => {
        return (
          <div key={article.article_id} className="article-container">
            <li>
              <Link to={`/articles/${article.article_id}`}>
                <h1>{article.title}</h1>
              </Link>
              <h2>Author: {article.author}</h2>
              <h2>Topic: {article.topic}</h2>
              <h2>Votes: {article.votes}</h2>
              <h2> Comments: {article.comment_count}</h2>
              <h2> Posted at: {article.created_at}</h2>
            </li>
          </div>
        );
      })}
    </>
  );
};

export default Articles;
