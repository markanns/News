import Thumbnail from "../../Thumbnail/Thumbnail";
import { NewsHolder } from "../StyledCategories";
import { LinkItem } from "./StyledCategory";
import useCategory from "../../../hooks/useCategory";
import React from "react";
import ImagePlaceholder from "../../ImagePlaceholder/ImagePlaceholder";

type CategoryProps = {
  category: string;
};
const Category = ({ category }: CategoryProps) => {
  const { singleCategory, isLoading, isError } = useCategory(category);

  let technologyNewsList;
  if (isLoading || !singleCategory) {
    technologyNewsList = Array.from({ length: 5 }, (_, index) =>
      React.cloneElement(<ImagePlaceholder />, { key: index })
    );
  } else {
    technologyNewsList = singleCategory
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
      <LinkItem to={`${category}/allcategory`}>{category}</LinkItem>
      {isError && <p>Something went wrong...</p>}
      {isLoading && <p>Loading...</p>}
      <NewsHolder>{technologyNewsList}</NewsHolder>
    </div>
  );
};

export default Category;
