import { useNewsContext } from "../context/NewsContext";
import { useState, useEffect } from "react";
import { GetNewsByCategory } from "../service/Service";
import { NewsItem } from "../types/Article";

const useCategory = (category: string) => {
  const { country } = useNewsContext();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [singleCategory, setSingleCategory] = useState<NewsItem[]>([]);

  useEffect(() => {
    GetNewsByCategory(country, category)
      .then(data => {
        setSingleCategory(data);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [country, category]);
  return { singleCategory, isLoading, isError };
};
export default useCategory;
