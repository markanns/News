import { GetTopNews, GetNewsByCategory, GetSearchedNews, DiscriminatedType } from "../service/Service";
import { useQuery } from "@tanstack/react-query";

const useNews = <T>(fetchFunction: (...args: Array<T>) => Promise<DiscriminatedType>, ...args: Array<T>) => {
  return useQuery({
    queryKey: ["news", ...args],
    enabled: args.every(arg => arg !== ""),
    queryFn: async () => {
      // if (args.some(arg => arg === "")) return [];
      const result = await fetchFunction(...args);
      if ("error" in result) {
        throw new Error(result.error);
      }
      return result.data;
    },
  });
};

export default useNews;
export { GetTopNews, GetNewsByCategory, GetSearchedNews };
