import { useParams, Link } from "react-router-dom";
import { useNewsContext } from "../../context/NewsContext";
import { Wrap } from "../../styles/Global";
import { SingleNewsImage } from "../SingleNews/Styled.SingleNews";
import useCategory from "../../hooks/useCategory";

const SingleCategoryNews = () => {
  const { title } = useParams<{ title: string }>();
  const { category } = useParams() as { category: string };
  const { handleButtonsState } = useNewsContext();
  const handleDisableButton = () => {
    handleButtonsState();
  };

  const listOfCategories = useCategory(category).singleCategory;
  const singleCategoryNews = listOfCategories.find(n => n.title === title);

  return (
    <Wrap>
      {singleCategoryNews && (
        <>
          <h1>{singleCategoryNews.title}</h1>
          <SingleNewsImage src={singleCategoryNews.urlToImage} alt={singleCategoryNews.title} />
          <p>{singleCategoryNews.content}</p>
        </>
      )}
      <Link to="/categories" onClick={handleDisableButton}>
        back to categories news
      </Link>
    </Wrap>
  );
};

export default SingleCategoryNews;
