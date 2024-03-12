import { useState, useCallback, useMemo, useEffect } from "react";
import { InputHolder } from "./StyledSearch";
import { Wrap } from "../../styles/Global";
import { debounce } from "lodash";
import { useNewsContext } from "../NewsContext/NewsContext";
import { ThumbnailItem, Image } from "../Thumbnail/StyledThumbnail";
import { NewsHolder } from "../TopNews/StyledTopNews";
import Thumbnail from "../Thumbnail/Thumbnail";
import useSearch from "../../hooks/useSearch";
import { useNavigate, useLocation } from "react-router-dom";

type NewsItem = {
  title: string;
  description: string;
  urlToImage: string;
  content: string;
};
type SearchProps = string;

const Search = () => {
  const { news, setIsActive } = useNewsContext();
  const location = useLocation();
  const navigate = useNavigate();

  const params = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const [searchTerm, setSearchTerm] = useState<SearchProps>(params.get("term") || "");
  const { result, isLoading, isError } = useSearch(searchTerm);
  const [inputValue, setInputValue] = useState(searchTerm);

  useEffect(() => {
    const termFromUrl = params.get("term");
    if (termFromUrl) {
      setSearchTerm(termFromUrl);
    }
  }, [params]);

  useEffect(() => {
    if (searchTerm) {
      navigate(`/search?term=${searchTerm}`);
      setIsActive(false);
    } else {
      navigate(`/search`);
      setIsActive(true);
    }
  }, [searchTerm, navigate, setIsActive]);

  const sendRequest = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  const debouncedSendRequest = useMemo(() => {
    return debounce(sendRequest, 1000);
  }, [sendRequest]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    debouncedSendRequest(event.target.value);
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
      <NewsHolder>{searchTerm ? articles : allNews}</NewsHolder>
    </Wrap>
  );
};

export default Search;
