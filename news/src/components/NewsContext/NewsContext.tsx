import { ReactNode, createContext, useState, useContext } from "react";

type NewsContextType = {
  country: string;
  handleSelectCountry: (country: string) => void;
};
const NewsContext = createContext<NewsContextType>({
  country: "",
  handleSelectCountry: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useNewsContext = () => {
  return useContext(NewsContext);
};
export const NewsProvider = ({ children }: { children: ReactNode }) => {
  const [country, setCountry] = useState("us");
  const handleSelectCountry = (country: string) => {
    setCountry(country);
  };

  return (
    <NewsContext.Provider value={{ country, handleSelectCountry }}>
      {children}
    </NewsContext.Provider>
  );
};
