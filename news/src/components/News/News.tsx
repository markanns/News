import Thumbnail from "../Thumbnail/Thumbnail";
import { useState, useEffect } from "react";
import { NewsHolder } from "./StyledNews";
// import { useNewsContext } from "../NewsContext/NewsContext";

const News = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=f62196a68b7b41d385329a19658c8625`
    )
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles);
      });
  }, []);

  type NewsItem = {
    title: string;
    description: string;
    urlToImage: string;
  };

  const newsList = (
    <>
      {news.map((item, index) => (
        <Thumbnail
          key={index}
          title={item.title}
          description={item.description}
          image={item.urlToImage}
        />
      ))}
    </>
  );

  return <NewsHolder>{newsList}</NewsHolder>;
};

export default News;
