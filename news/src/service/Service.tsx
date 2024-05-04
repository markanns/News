import { NewsItem } from "../types/Article";

const newsApiKey = import.meta.env.VITE_APP_NEWS_API_KEY;
const baseUrl = "https://newsapi.org/v2/top-headlines";

const GetNewsByCategory = async (country: string, category: string): Promise<Array<NewsItem>> => {
  const response = await fetch(`${baseUrl}?country=${country}&category=${category}&apiKey=${newsApiKey}`);
  const data = await response.json();
  return data.articles;
};

const GetTopNews = async (country: string) => {
  const response = await fetch(`${baseUrl}?country=${country}&apiKey=${newsApiKey}`);
  const data = await response.json();
  return data.articles;
};

const GetSearchedNews = async (searchTerm: string) => {
  const response = await fetch(`${baseUrl}?q=${searchTerm}&apiKey=${newsApiKey}`);
  const data = await response.json();
  return data.articles;
};

export { GetNewsByCategory, GetTopNews, GetSearchedNews };
