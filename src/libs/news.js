import NewsAPI from "newsapi";

export const newsApi = new NewsAPI(process.env.NEWS_API_KEY);
