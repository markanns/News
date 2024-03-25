import Thumbnail from "../Thumbnail/Thumbnail";
import { NewsHolder } from "./StyledTopNews";
import { Wrap } from "../../styles/Global";
import { useNewsContext } from "../../context/NewsContext";
import useNews, { GetTopNews } from "../../hooks/useNews";

const TopNews = () => {
  const { country } = useNewsContext();
  const { data: news, isPending, isError } = useNews(GetTopNews, country);
  const newsList = (
    <>
      {news?.map((item, index) => (
        <Thumbnail
          key={index}
          title={item.title}
          description={item.description}
          urlToImage={item.urlToImage}
          content={item.content}
        />
      ))}
    </>
  );
  return (
    <Wrap>
      <h2>Top news from {country}</h2>
      <NewsHolder>
        {isError && <p>Something went wrong...</p>}
        {isPending && <p>Loading...</p>}
        {newsList}
      </NewsHolder>
    </Wrap>
  );
};

export default TopNews;
