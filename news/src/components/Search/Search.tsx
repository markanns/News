import { useState, useMemo, useEffect } from "react";
import { InputHolder } from "./StyledSearch";
import { Wrap } from "../../styles/Global";
import { useNewsContext } from "../../context/NewsContext";
import { NewsHolder } from "../TopNews/StyledTopNews";
import Thumbnail from "../Thumbnail/Thumbnail";
import useSearch from "../../hooks/useSearch";
import { useNavigate, useLocation } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import { NewsItem } from "../../types/Article";

import useTopNews from "../../hooks/useTopNews";
const Search = () => {
  const { setIsActive, country } = useNewsContext();
  const location = useLocation();
  const navigate = useNavigate();
  const { news, isLoading } = useTopNews(country);
  const params = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const [inputValue, setInputValue] = useState(params.get("term") || "");
  const { debouncedValue } = useDebounce(inputValue, 1000);
  const { result, isError } = useSearch(debouncedValue);

  useEffect(() => {
    if (debouncedValue) {
      navigate(`/search?term=${debouncedValue}`);
      setIsActive(false);
    } else {
      navigate(`/search`);
      setIsActive(true);
    }
  }, [debouncedValue, navigate, setIsActive]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const articles = result.map((item: NewsItem, index: number) => (
    <Thumbnail
      key={index}
      title={item.title}
      description={item.description}
      urlToImage={item.urlToImage}
      content={item.content}
    />
  ));

  const allNews = news.map((item, index) => (
    <Thumbnail
      key={index}
      title={item.title}
      description={item.description}
      urlToImage={item.urlToImage}
      content={item.content}
    />
  ));

  return (
    <Wrap>
      <h2>Search for news</h2>
      <InputHolder>
        <input type="text" value={inputValue} placeholder="Search for news..." onChange={handleInputChange} />
      </InputHolder>
      {isError && <p>Something went wrong...</p>}
      {isLoading && <p>Loading...</p>}
      <NewsHolder>{inputValue ? articles : allNews}</NewsHolder>
    </Wrap>
  );
};

export default Search;
