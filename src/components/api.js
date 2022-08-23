export default function fetchArticles() {
  return fetch("https://zeshan-nc-news.herokuapp.com/api/article").then(
    (res) => {
      console.log(res);
      return res.json();
    }
  );
}
