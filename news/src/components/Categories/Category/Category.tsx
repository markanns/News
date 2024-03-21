import React from "react";
import Thumbnail from "../../Thumbnail/Thumbnail";
import { NewsHolder } from "../StyledCategories";
import { LinkItem } from "./StyledCategory";
import useNews, { GetNewsByCategory } from "../../../hooks/useNews";
import { NewsItem } from "../../../types/Article";
import { useNewsContext } from "../../../context/NewsContext";
import ImagePlaceholder from "../../ImagePlaceholder/ImagePlaceholder";

type CategoryProps = {
  category: string;
};
const Category = ({ category }: CategoryProps) => {
  const { country } = useNewsContext();

  const { news, isLoading, isError } = useNews(
    GetNewsByCategory as (arg1: string, arg2?: string | undefined) => Promise<{ data: NewsItem[]; error: undefined }>,
    country,
    category
  );
  let technologyNewsList;

  if (isLoading || !news) {
    technologyNewsList = Array.from({ length: 5 }, (_, index) =>
      React.cloneElement(<ImagePlaceholder />, { key: index })
    );
  } else {
    technologyNewsList = news
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
