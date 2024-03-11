import { useState, useEffect } from "react";
import {GetSearchedNews} from "../components/NewsService/NewsServices";
type NewsItem = {
    title: string;
    description: string;
    urlToImage: string;
    content: string;
  };
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
      GetSearchedNews(searchedTerm).then((data) => {
        setResult(data);
      })
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false));
    }, [searchedTerm]);
    
    return { result, isLoading, isError};
}

export default useSearch;