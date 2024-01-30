import { useState, useEffect } from "react";
import { useNewsContext } from "../NewsContext/NewsContext";
import Thumbnail from "../Thumbnail/Thumbnail";
import Business from "../Categories/Business/Business";
import { Wrap } from "../../styles/Global";
import { NewsHolder } from "./StyledCategories";

type NewsItem = {
  title: string;
  description: string;
  urlToImage: string;
  content: string;
};
const Categories = () => {
  const { country } = useNewsContext();

  const [businessNews, setBusinessNews] = useState<NewsItem[]>([]);
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=f62196a68b7b41d385329a19658c8625`
    )
      .then((response) => response.json())
      .then((data) => {
        setBusinessNews(data.articles);
      });
  }, [country]);

  return (
    <Wrap>
      <h2>Top 5 news by categories from {country}</h2>
      <NewsHolder>
        <Business />
      </NewsHolder>
    </Wrap>
  );
};

export default Categories;
