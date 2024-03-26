import { ReactNode, createContext, useState, useContext } from "react";
type NewsContextType = {
  country: string;
  isActive: boolean;
  handleClickOnCountryButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  handleButtonsState: () => void;
};
const NewsContext = createContext<NewsContextType>({
  country: "",
  isActive: true,
  setIsActive: () => {},
  handleClickOnCountryButton: () => {},
  handleButtonsState: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useNewsContext = () => {
  return useContext(NewsContext);
};

export const NewsProvider = ({ children }: { children: ReactNode }) => {
  const [country, setCountry] = useState<string>("US");
  const [isActive, setIsActive] = useState<boolean>(true);

  const handleClickOnCountryButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    const targetText = event.currentTarget.textContent;
    setCountry(targetText!);
  };

  const handleButtonsState = () => {
    if (isActive === false) {
      setIsActive(true);
    }
  };
  return (
    <NewsContext.Provider
      value={{
        country,
        handleClickOnCountryButton,
        handleButtonsState,
        setIsActive,
        isActive,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
