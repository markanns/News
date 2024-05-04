import React from "react";
import Thumbnail from "../../Thumbnail/Thumbnail";
import { NewsHolder } from "../StyledCategories";
import { LinkItem } from "./StyledCategory";
import { useCategoryNews } from "../../../hooks/useNews";
import ImagePlaceholder from "../../ImagePlaceholder/ImagePlaceholder";

type CategoryProps = {
  category: string;
};
const Category = ({ category }: CategoryProps) => {
  const { data: news, isPending, isError } = useCategoryNews(category);
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
