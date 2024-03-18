import Thumbnail from "../Thumbnail/Thumbnail";
import { NewsHolder } from "./StyledTopNews";
import { Wrap } from "../../styles/Global";
import { useNewsContext } from "../../context/NewsContext";

const TopNews = () => {
  const { country, news, isLoading } = useNewsContext();

  const newsList = (
    <>
      {news.map((item, index) => (
        <Thumbnail
          key={index}
          title={item.title}
          description={item.description}
          image={item.urlToImage}
          isSingleThumbnail={true}
        />
      ))}
    </>
  );

  return (
    <Wrap>
      <h2>Top news from {country}</h2>
      <NewsHolder>
        {isLoading && <p>Loading...</p>}
        {newsList}
      </NewsHolder>
    </Wrap>
  );
};

export default TopNews;
