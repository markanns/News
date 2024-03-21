import { useState, useEffect } from "react";
import { GetTopNews, GetNewsByCategory, GetSearchedNews } from "../service/Service";
import { NewsItem } from "../types/Article";

const useNews = (
  fetchFunction: (arg1: string, arg2?: string) => Promise<{ data: NewsItem[]; error: undefined }>,
  arg1: string,
  arg2?: string
) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    if (!arg1) return;
    fetchFunction(arg1, arg2)
      .then(res => {
        if (res.error) {
          setIsError(true);
          return;
        }
        setNews(res.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [arg1, arg2, fetchFunction]);

  return { news, isLoading, isError };
};

export default useNews;
export { GetTopNews, GetNewsByCategory, GetSearchedNews };
