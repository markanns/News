import { useState, useMemo, useEffect} from "react";
import { InputHolder } from "./StyledSearch";
import { Wrap } from "../../styles/Global";
import { useNewsContext } from "../../context/NewsContext";
import { ThumbnailItem, Image } from "../Thumbnail/StyledThumbnail";
import { NewsHolder } from "../TopNews/StyledTopNews";
import Thumbnail from "../Thumbnail/Thumbnail";
import useSearch from "../../hooks/useSearch";
import { useNavigate, useLocation } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import { NewsItem } from "../../types/Article";

const Search = () => {
  const { news, setIsActive } = useNewsContext();
  const location = useLocation();
  const navigate = useNavigate();

  const params = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const [inputValue, setInputValue] = useState(params.get("term") || "");
  const {debouncedValue} = useDebounce(inputValue, 1000);
  const { result, isLoading, isError} = useSearch(debouncedValue);
  
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
    <ThumbnailItem key={index}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <Image src={item.urlToImage} alt={item.title} />
      <p>{item.content}</p>
    </ThumbnailItem>
  ));

  const allNews = news.map((item, index) => (
    <Thumbnail
      key={index}
      title={item.title}
      description={item.description}
      image={item.urlToImage}
      isSingleThumbnail={true}
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
