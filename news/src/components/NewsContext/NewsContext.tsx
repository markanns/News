import { ReactNode, createContext, useState, useContext } from "react";

type NewsContextType = {
  country: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const NewsContext = createContext<NewsContextType>({
  country: "",
  handleClick: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useNewsContext = () => {
  return useContext(NewsContext);
};
export const NewsProvider = ({ children }: { children: ReactNode }) => {
  const [country, setCountry] = useState<string>("us");

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const targetText = event.currentTarget.textContent;
    setCountry(targetText!);
  };

  return (
    <NewsContext.Provider value={{ country, handleClick }}>
      {children}
    </NewsContext.Provider>
  );
};
