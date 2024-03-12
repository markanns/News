import React from "react";
import { useParams } from "react-router-dom";
import Thumbnail from "../Thumbnail/Thumbnail";
import { NewsHolder } from "../TopNews/StyledTopNews";
import { Wrap } from "../../styles/Global";
import useCategory from "../../hooks/useCategory";
import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder";

const AllCategories = () => {
  const { category } = useParams() as { category: string };
  const { singleCategory, isLoading, isError } = useCategory(category);

  let allCategoryNews;
  if (isLoading || !singleCategory) {
    allCategoryNews = Array.from({ length: 5 }, (_, index) => React.cloneElement(<ImagePlaceholder />, { key: index }));
  } else {
    allCategoryNews = singleCategory.map((item, index) => (
      <Thumbnail key={index} title={item.title} description={item.description} image={item.urlToImage} />
    ));
  }
  return (
    <div>
      <Wrap>
        <h1>{category}</h1>
        {isError && <p>Something went wrong...</p>}
        {isLoading && <p>Loading...</p>}
        <NewsHolder>{allCategoryNews}</NewsHolder>
      </Wrap>
    </div>
  );
};

export default AllCategories;
