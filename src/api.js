import axios from "axios";

const request = axios.create({
  baseURL: "https://ncnews-21-7-19.herokuapp.com/api"
});

export const fetchArticles = () => {
  return request.get("/articles").then(res => {
    return res.data.articles;
  });
};
