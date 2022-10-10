import axios from "axios";

// Routes
const newsApi = axios.create({
  baseURL: "https://zeshan-nc-news.herokuapp.com/api",
});

export const fetchArticles = (topic, sortby, orderby) => {
  return newsApi
    .get("/article", { params: { topic, sortby, orderby } })
    .then((res) => {
      return res.data.article;
    });
};

export const fetchTopics = () => {
  return newsApi.get(`/topics`).then((res) => {
    return res.data.topics;
  });
};
export const getArticleById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const patchArticleVotes = (article_id, voteChange) => {
  return newsApi.patch(`/articles/${article_id}`, { inc_votes: voteChange });
};

export const getCommentsById = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const postCommentsById = (article_id, username, body) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, {
      username: username,
      body: body,
    })
    .then((res) => {
      return res.data.comments;
    });
};
