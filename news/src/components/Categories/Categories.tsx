import { useNewsContext } from "../NewsContext/NewsContext";
import Category from "./Category/Category";
import { Wrap } from "../../styles/Global";
import { NewsHolder } from "./StyledCategories";

const Categories = () => {
  const { country } = useNewsContext();

  return (
    <Wrap>
      <h2>Top 5 news by categories from {country}</h2>
      <NewsHolder>
        <Category category="business" />
        {/* <Category category="technology" /> */}
      </NewsHolder>
    </Wrap>
  );
};

export default Categories;
