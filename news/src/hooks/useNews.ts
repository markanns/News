import { useState, useEffect } from "react";
import { GetTopNews, GetNewsByCategory, GetSearchedNews, DiscriminatedType } from "../service/Service";
import { NewsItem } from "../types/Article";

const useNews = <T>(
  fetchFunction: (...args: Array<T>) => Promise<DiscriminatedType>,
  ...args: Array<T>
) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    fetchFunction(...args)
      .then(res => {
        if ('error' in res) {
          setIsError(true);
          return;
        }
        setNews(res.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ fetchFunction, ...args]);

  return { news, isLoading, isError };
};

export default useNews;
export { GetTopNews, GetNewsByCategory, GetSearchedNews };
