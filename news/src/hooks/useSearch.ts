import { useEffect, useState } from "react";
import { GetSearchedNews } from "../service/Service";
import { NewsItem } from "../types/Article";


const useSearch = (searchedTerm: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [result, setResult] = useState<NewsItem[]>([]);

  useEffect(() => {
    if (!searchedTerm) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    GetSearchedNews(searchedTerm)
      .then(data => {
        setResult(data);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
    
  }, [searchedTerm]);

  return {  result, isLoading, isError };
};

export default useSearch;
