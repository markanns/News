import Thumbnail from "../Thumbnail/Thumbnail";
import { NewsHolder } from "./StyledTopNews";
import { Wrap } from "../../styles/Global";
import { useNewsContext } from "../../context/NewsContext";
import { NewsItem } from "../../types/Article";
import useNews, { GetTopNews } from "../../hooks/useNews";

const TopNews = () => {
  const { country } = useNewsContext();
  const { news, isLoading, isError } = useNews(
    GetTopNews as (arg1: string, arg2?: string | undefined) => Promise<{ data: NewsItem[]; error: undefined }>,
    country,
    ""
  );

  const newsList = (
    <>
      {news.map((item, index) => (
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
        {isLoading && <p>Loading...</p>}
        {newsList}
      </NewsHolder>
    </Wrap>
  );
};

export default TopNews;
