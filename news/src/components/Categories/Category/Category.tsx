import React from "react";
import Thumbnail from "../../Thumbnail/Thumbnail";
import { NewsHolder } from "../StyledCategories";
import { LinkItem } from "./StyledCategory";
<<<<<<< HEAD
import useNews, { GetNewsByCategory } from "../../../hooks/useNews";
import { useNewsContext } from "../../../context/NewsContext";
=======
import { useCategoryNews } from "../../../hooks/useNews";
>>>>>>> refactor
import ImagePlaceholder from "../../ImagePlaceholder/ImagePlaceholder";

type CategoryProps = {
  category: string;
};
const Category = ({ category }: CategoryProps) => {
<<<<<<< HEAD
  const { country } = useNewsContext();

  const { data: news, isPending, isError } = useNews(GetNewsByCategory, country, category);
=======
  const { data: news, isPending, isError } = useCategoryNews(category);
>>>>>>> refactor
  let categoryNewsList;

  if (isPending || !news) {
    categoryNewsList = Array.from({ length: 5 }, (_, index) =>
      React.cloneElement(<ImagePlaceholder />, { key: index })
    );
  } else {
    categoryNewsList = news
      .slice(0, 5)
      .map((item, index) => (
        <Thumbnail
          key={index}
          title={item.title}
          description={item.description}
          urlToImage={item.urlToImage}
          content={item.content}
        />
      ));
  }
  return (
    <div>
      <LinkItem to={`${category}`}>{category}</LinkItem>
      {isError && <p>Something went wrong...</p>}
      {isPending && <p>Loading...</p>}
      <NewsHolder>{categoryNewsList}</NewsHolder>
    </div>
  );
};

export default Category;
