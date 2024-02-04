import { useNewsContext } from "../NewsContext/NewsContext";
import Business from "../Categories/Business/Business";
import Technology from "../Categories/Technology/Technology";
import { Wrap } from "../../styles/Global";
import { NewsHolder } from "./StyledCategories";

const Categories = () => {
  const { country } = useNewsContext();
  const { businessNews } = useNewsContext();
  const { technologyNews } = useNewsContext();

  return (
    <Wrap>
      <h2>Top 5 news by categories from {country}</h2>
      <NewsHolder>
        <Business businessNews={businessNews} />
        <Technology technologyNews={technologyNews} />
      </NewsHolder>
    </Wrap>
  );
};

export default Categories;
