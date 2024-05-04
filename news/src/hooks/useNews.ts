import { GetTopNews, GetNewsByCategory, GetSearchedNews } from "../service/Service";
import { useQuery } from "@tanstack/react-query";
import { useNewsContext } from "../context/NewsContext";

const useCategoryNews = (category: string) => {
  const { country } = useNewsContext();

  return useQuery({
    queryKey: [country, category],
    queryFn: () => GetNewsByCategory(country, category),
  });
};

const useTopNews = () => {
  const { country } = useNewsContext();

  return useQuery({
    queryKey: [country],
    queryFn: () => GetTopNews(country),
  });
};
const useSearchedNews = (searchTerm: string) => {
  return useQuery({
    queryKey: [searchTerm],
    queryFn: () => GetSearchedNews(searchTerm),
    enabled: searchTerm !== "",
  });
};
export { useCategoryNews, useTopNews, useSearchedNews };
export { GetTopNews, GetNewsByCategory, GetSearchedNews };
