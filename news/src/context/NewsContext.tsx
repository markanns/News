import { ReactNode, createContext, useState, useContext } from "react";

import useTopNews from "../hooks/useTopNews";
import { NewsItem } from "../types/Article";

type NewsContextType = {
  country: string;
  isActive: boolean;
  news: NewsItem[];
  isLoading: boolean;
  handleClickOnCountryButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  handleButtonsState: () => void;
  handleActiveButton: () => void;
};
const NewsContext = createContext<NewsContextType>({
  country: "",
  news: [],
  isActive: true,
  isLoading: true,
  setIsActive: () => {},
  handleClickOnCountryButton: () => {},
  handleButtonsState: () => {},
  handleActiveButton: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useNewsContext = () => {
  return useContext(NewsContext);
};

export const NewsProvider = ({ children }: { children: ReactNode }) => {
  const [country, setCountry] = useState<string>("US");
  const [isActive, setIsActive] = useState<boolean>(true);
  const { news, isLoading } = useTopNews(country);

  const handleClickOnCountryButton = (event: React.MouseEvent<HTMLButtonElement>) => {
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
        isLoading,
        handleButtonsState,
        setIsActive,
        isActive,
        handleActiveButton,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
