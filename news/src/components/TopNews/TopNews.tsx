import News from "../News/News";
import { Wrap } from "../../styles/Global";
import { useNewsContext } from "../NewsContext/NewsContext";

const TopNews = () => {
  const { country } = useNewsContext();

  return (
    <Wrap>
      <h2>Top news from {country}</h2>
      <News />
    </Wrap>
  );
};

export default TopNews;
