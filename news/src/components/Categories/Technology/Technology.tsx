import ChategoriesThumbnail from "../../CategoriesThumbnail/CategoriesThumbnail";
import { NewsHolder } from "../StyledCategories";
import { LinkItem } from "./StyledTechnology";
import NewsServices from "../../NewsService/NewsServices";
import { useNewsContext } from "../../NewsContext/NewsContext";
import { useState, useEffect } from "react";

type NewsItem = {
  title: string;
  description: string;
  urlToImage: string;
  content: string;
};

const Category = (category: { category: string }) => {
  const { country } = useNewsContext();
  const [kategorija, setKategorija] = useState<NewsItem[]>([]);

  useEffect(() => {
    NewsServices(country, category.category).then((data) => {
      setKategorija(data);
    });
  }, [country, category.category]);

  const teschnologyNewsList = kategorija
    .slice(0, 5)
    .map((item, index) => (
      <ChategoriesThumbnail
        key={index}
        title={item.title}
        description={item.description}
        image={item.urlToImage}
        categorie={category.category}
      />
    ));

  return (
    <div>
      <LinkItem to="technology/allcategorie">Technology</LinkItem>
      <NewsHolder>{teschnologyNewsList}</NewsHolder>
    </div>
  );
};

export default Category;
