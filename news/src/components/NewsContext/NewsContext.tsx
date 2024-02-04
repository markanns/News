import {
  ReactNode,
  createContext,
  useState,
  useEffect,
  useContext,
} from "react";

type NewsContextType = {
  country: string;
  isActive: boolean;
  news: NewsItem[];
  handleClickOnCountryButton: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
  handleButtonsState: () => void;
  handleActiveButton: () => void;
};
const NewsContext = createContext<NewsContextType>({
  country: "",
  news: [],
  isActive: true,
  handleClickOnCountryButton: () => {},
  handleButtonsState: () => {},
  handleActiveButton: () => {},
});
type NewsItem = {
  title: string;
  description: string;
  urlToImage: string;
  content: string;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useNewsContext = () => {
  return useContext(NewsContext);
};

export const NewsProvider = ({ children }: { children: ReactNode }) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [country, setCountry] = useState<string>("US");
  const [isActive, setIsActive] = useState<boolean>(true);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=f62196a68b7b41d385329a19658c8625`
    )
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles);
      });
  }, [country]);
  const handleClickOnCountryButton = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const targetText = event.currentTarget.textContent;
    setCountry(targetText!);
  };

  const handleButtonsState = () => {
    setIsActive(!isActive);
  };
  const handleActiveButton = () => {
    if (isActive === false) {
      setIsActive(true);
    }
  };
  return (
    <NewsContext.Provider
      value={{
        country,
        // businessNews,
        handleClickOnCountryButton,
        news,
        handleButtonsState,
        isActive,
        handleActiveButton,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
