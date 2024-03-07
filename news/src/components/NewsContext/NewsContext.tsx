import {
  ReactNode,
  createContext,
  useState,
  useContext,
} from "react";

import useTopNews from "../../hooks/useTopNews";


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
  const [country, setCountry] = useState<string>("US");
  const [isActive, setIsActive] = useState<boolean>(true);
  const {news} = useTopNews(country);

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
