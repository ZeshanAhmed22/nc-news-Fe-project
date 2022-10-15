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
      <div className="filters">
        <h2 className="article-title">Articles</h2>
        <div>
          <Sortby setSortBy={setSortBy} />
          <Orderby setOrderBy={setOrderBy} />
        </div>
      </div>
      {articleList.map((article) => {
        return (
          <div key={article.article_id} className="article-container">
            <li>
              <Link
                className="article-title"
                to={`/articles/${article.article_id}`}
              >
                <h2 className="background-blue">{article.title}</h2>
              </Link>
              <h3>Author: {article.author}</h3>
              <h3>Topic: {article.topic}</h3>
              <h3>Votes: {article.votes}</h3>
              <h3> Comments: {article.comment_count}</h3>
              <h3>
                Posted at: {new Date(article.created_at).toLocaleDateString()}
              </h3>
            </li>
          </div>
        );
      })}
    </>
  );
};

export default Articles;
