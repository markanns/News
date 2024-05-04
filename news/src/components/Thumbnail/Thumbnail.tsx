import { ThumbnailItem, Image } from "./StyledThumbnail";
import { useNewsContext } from "../../context/NewsContext";
import { NewsItem } from "../../types/Article";
import { Link } from "react-router-dom";

const Thumbnail = ({ title, description, urlToImage, content }: NewsItem) => {
  const { handleButtonsState, setIsActive } = useNewsContext();
  const handleDisableButton = () => {
    handleButtonsState();
    setIsActive(false);
  };

  const defaultImage = "https://as2.ftcdn.net/v2/jpg/04/70/29/97/1000_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg";
  return (
    <ThumbnailItem>
      <h3>{title}</h3>
      <Image src={urlToImage || defaultImage} alt={title} />
      <p>{description}</p>
      <Link to={`/articles/${title}`} state={{ title, content, urlToImage }} onClick={handleDisableButton}>
        Read more
      </Link>
    </ThumbnailItem>
  );
};

export default Thumbnail;
