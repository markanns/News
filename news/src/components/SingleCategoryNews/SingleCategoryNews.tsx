import { useParams, Link } from "react-router-dom";
import { useNewsContext } from "../NewsContext/NewsContext";
import { Wrap } from "../../styles/Global";
import { SingleNewsImage } from "../SingleNews/Styled.SingleNews";

const SingleCategoryNews = () => {
  const { title } = useParams<{ title: string }>();
  const { categorie } = useParams<{ categorie: string }>();
  const { businessNews } = useNewsContext();
  const { technologyNews } = useNewsContext();
  const { handleButtonsState } = useNewsContext();
  const handleDisableButton = () => {
    handleButtonsState();
  };
  let singleCategorieNews;
  if (categorie === "technology") {
    singleCategorieNews = technologyNews.find((n) => n.title === title);
  }
  if (categorie === "business") {
    singleCategorieNews = businessNews.find((n) => n.title === title);
  }

  if (!singleCategorieNews) {
    return <div>News not found</div>;
  }
  return (
    <Wrap>
      <h1>{singleCategorieNews.title}</h1>
      <SingleNewsImage
        src={singleCategorieNews.urlToImage}
        alt={singleCategorieNews.title}
      />
      <p>{singleCategorieNews.content}</p>
      <Link to="/categories" onClick={handleDisableButton}>
        back to categories news
      </Link>
    </Wrap>
  );
};

export default SingleCategoryNews;
