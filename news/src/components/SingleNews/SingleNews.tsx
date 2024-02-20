import { useParams, Link } from "react-router-dom";
import { useNewsContext } from "../NewsContext/NewsContext";
import { Wrap } from "../../styles/Global";
import { SingleNewsImage } from "./Styled.SingleNews";
import { useLocation } from "react-router-dom";


const SingleNews = () => {
  const { title } = useParams<{ title: string }>();
  const { news } = useNewsContext();
  const { handleButtonsState } = useNewsContext();
  const location = useLocation();
  
  let path;
  if (location.pathname.includes("topNews")) {
    path = "topNews";
  } else if (location.pathname.includes("search")) {
    path = "search";
  }
  
  const handleDisableButton = () => {
    handleButtonsState();
  };
  const singleNews = news.find((n) => n.title === title);

  if (!singleNews) {
    return <div>News not found</div>;
  }
  return (
    <Wrap>
      <h1>{singleNews.title}</h1>
      <SingleNewsImage src={singleNews.urlToImage} alt={singleNews.title} />
      <p>{singleNews.content}</p>
      <Link to={`/${path}`} onClick={handleDisableButton}>
        back to news
      </Link>
    </Wrap>
  );
};

export default SingleNews;
