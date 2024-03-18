import { useState, useEffect } from "react";
import { GetTopNews } from "../service/Service";
import { NewsItem } from "../types/Article";

const useTopNews = (activeCountry: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    GetTopNews(activeCountry)
      .then(data => {
        setNews(data);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [activeCountry]);
  return { news, isLoading, isError };
};

export default useTopNews;
