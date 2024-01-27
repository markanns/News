import Thumbnail from "../Thumbnail/Thumbnail";
import { NewsHolder } from "./StyledNews";
import { useNewsContext } from "../NewsContext/NewsContext";

const News = () => {
  const { news } = useNewsContext();
  const newsList = (
    <>
      {news.map((item, index) => (
        <Thumbnail
          key={index}
          title={item.title}
          description={item.description}
          image={item.urlToImage}
        />
      ))}
    </>
  );

  return <NewsHolder>{newsList}</NewsHolder>;
};

export default News;
