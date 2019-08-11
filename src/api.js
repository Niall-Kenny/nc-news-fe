import axios from "axios";

const request = axios.create({
  baseURL: "https://ncnews-21-7-19.herokuapp.com/api"
});

export const fetchArticles = (sort_by, author) => {
  return request
    .get("/articles", {
      params: {
        sort_by,
        author
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

export const deleteComment = comment_id => {
  return request.delete(`/comments/${comment_id}`).then(res => {
    return res;
  });
};

export const incrementVoteCount = (endpoint, id, inc_votes) => {
  return request
    .patch(`/${endpoint}/${id}`, {
      inc_votes
    })
    .then(res => {
      return res;
    });
};

export const fetchUserInfo = username => {
  return request.get(`/users/${username}`).then(res => {
    return res.data.user;
  });
};

export const fetchPreviewContent = () => {
  return request.get(`/topics/preview`).then(res => {
    return res.data.topicsPreview;
  });
};
