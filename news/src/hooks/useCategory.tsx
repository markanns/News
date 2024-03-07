import { useNewsContext } from "../components/NewsContext/NewsContext";
import { useState, useEffect } from "react";
import {GetNewsByCategory} from "../components/NewsService/NewsServices";

type NewsItem = {
    title: string;
    description: string;
    urlToImage: string;
    content: string;
};
  
const useCategory = ( category: string ) => {
  const { country } = useNewsContext();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [singleCategory, setSingleCategory] = useState<NewsItem[]>([]);
    console.log(country, category);
    
  useEffect(() => {
        GetNewsByCategory(country, category).then((data) => {
        setSingleCategory(data);
      })
        .catch(() => {
            setIsError(true);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }, [country, category]);
    return { singleCategory, isLoading, isError};
};
export default useCategory;