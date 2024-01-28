import { useState } from "react";
import { useNewsContext } from "../NewsContext/NewsContext";
import Thumbnail from "../Thumbnail/Thumbnail";
import { Wrap } from "../../styles/Global";
import { NewsHolder } from "./StyledCategories";

const Categories = () => {
  return (
    <Wrap>
      <h1>Categories</h1>
      <NewsHolder>
        {/* <Thumbnail
            key={index}
            title={item.title}
            description={item.description}
            image={item.urlToImage}
          /> */}
      </NewsHolder>
    </Wrap>
  );
};

export default Categories;
