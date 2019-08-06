import axios from "axios";

const request = axios.create({
  baseURL: "https://ncnews-21-7-19.herokuapp.com/api"
});

export const fetchArticles = sort_by => {
  return request
    .get("/articles", {
      params: {
        sort_by
      }
    })
    .then(res => {
      return res.data.articles;
    });
};

export const fetchArticle = article_id => {
  return request.get(`/articles/${article_id}`).then(res => res.data.article);
};

export const fetchComments = article_id => {
  return request.get(`/articles/${article_id}/comments`).then(res => {
    return res.data.comments;
  });
};

export const postComment = (article_id, username, body) => {
  return request
    .post(`/articles/${article_id}/comments`, {
      username,
      body
    })
    .then(res => {
      return res.data.comment;
    });
};
