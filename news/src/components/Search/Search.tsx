import { useState, useCallback, useMemo } from "react";
import {InputHolder} from "./StyledSearch";
import { Wrap } from "../../styles/Global";
import { debounce } from 'lodash';
import { useNewsContext } from "../NewsContext/NewsContext";
import { ThumbnailItem, Image } from "../Thumbnail/StyledThumbnail";
import { NewsHolder } from "../News/StyledNews";
import Thumbnail from "../Thumbnail/Thumbnail";

type NewsItem = {
  title: string;
  description: string;
  urlToImage: string;
  content: string;
};

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { news } = useNewsContext();
  const [searchedNews, setSearchedNews] = useState<NewsItem[]>([]);

  const sendRequest = useCallback((value: string) => {

    const searchedTopNews = news.filter((item) => {
      return item.title.toLowerCase().includes(value.toLowerCase()) || (item.description && item.description.toLowerCase().includes(value.toLowerCase()));
    });
    setSearchedNews(searchedTopNews);
  }, [news]);

  const debouncedSendRequest = useMemo(() => {
    return debounce(sendRequest, 1000);
  }, [sendRequest]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    debouncedSendRequest(event.target.value);
  };
  
  const searchedArticles : NewsItem[] = searchedNews;
   

  const articles = searchedArticles.map((item, index) => (
    <ThumbnailItem key={index}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <Image src={item.urlToImage} alt={item.title} />
        <p>{item.content}</p>
    </ThumbnailItem>
  ))  
  const presentNews = articles.length > 0 ? articles : <h3>No news found</h3>;

    const allNews = news.map((item, index) => (
      <Thumbnail key={index}
        title={item.title}
        description={item.description}
        image={item.urlToImage}
      />
    ))
  return (
    <Wrap>
      <h2>Search for news</h2>
      <InputHolder>
        <input type="text" placeholder="Search for news..." value={searchTerm} onChange={handleInputChange} />
        </InputHolder>
          <NewsHolder>
          {searchTerm ? presentNews : allNews}
          </NewsHolder>
    </Wrap>
  );
};

export default Search;
