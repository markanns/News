import React from "react";
import { useParams } from "react-router-dom";
import Thumbnail from "../Thumbnail/Thumbnail";
import { NewsHolder } from "../TopNews/StyledTopNews";
import { Wrap } from "../../styles/Global";
import useNews, { GetTopNews } from "../../hooks/useNews";

import { NewsItem } from "../../types/Article";
import { useNewsContext } from "../../context/NewsContext";
import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder";

const AllCategories = () => {
  const { country } = useNewsContext();
  const { category } = useParams() as { category: string };
  const { news, isLoading, isError } = useNews(
    GetTopNews as (arg1: string, arg2?: string | undefined) => Promise<{ data: NewsItem[]; error: undefined }>,
    country,
    ""
  );

  let allCategoryNews;
  if (isLoading || !news) {
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
        {isLoading && <p>Loading...</p>}
        <NewsHolder>{allCategoryNews}</NewsHolder>
      </Wrap>
    </div>
  );
};

export default AllCategories;
