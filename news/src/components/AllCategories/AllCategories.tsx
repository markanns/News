import React from "react";
import { useParams } from "react-router-dom";
import Thumbnail from "../Thumbnail/Thumbnail";
import { NewsHolder } from "../TopNews/StyledTopNews";
import { Wrap } from "../../styles/Global";
<<<<<<< HEAD
import useNews, { GetNewsByCategory } from "../../hooks/useNews";

import { useNewsContext } from "../../context/NewsContext";
import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder";

const AllCategories = () => {
  const { country } = useNewsContext();
  const { category } = useParams() as { category: string };
  const { data: news, isPending, isError } = useNews(GetNewsByCategory, country, category);
=======
import { useCategoryNews } from "../../hooks/useNews";
import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder";

const AllCategories = () => {
  const { category } = useParams() as { category: string };
  const { data: news, isPending, isError } = useCategoryNews(category);
>>>>>>> refactor

  let allCategoryNews;
  if (isPending || !news) {
    allCategoryNews = Array.from({ length: 5 }, (_, index) => React.cloneElement(<ImagePlaceholder />, { key: index }));
  } else {
    allCategoryNews = news.map((item, index) => (
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
      <Wrap>
        <h1>{category}</h1>
        {isError && <p>Something went wrong...</p>}
        {isPending && <p>Loading...</p>}
        <NewsHolder>{allCategoryNews}</NewsHolder>
      </Wrap>
    </div>
  );
};

export default AllCategories;
