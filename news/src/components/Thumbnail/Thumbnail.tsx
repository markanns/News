import { ThumbnailItem, Image } from "./StyledThumbnail";
import { Link } from "react-router-dom";
import { useNewsContext } from "../NewsContext/NewsContext";

type ThumbnailNews = {
  title: string;
  description: string;
  image: string;
};
const Thumbnail = ({ title, description, image }: ThumbnailNews) => {
  const { handleButtonsState } = useNewsContext();

  const handleDisableButton = () => {
    handleButtonsState();
  };

  const defaultImage =
    "https://as2.ftcdn.net/v2/jpg/04/70/29/97/1000_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg";
  return (
    <ThumbnailItem>
      <h3>{title}</h3>
      <Image src={image || defaultImage} alt={title} />
      <p>{description}</p>
      <Link to={`/topNews/${title}`} onClick={handleDisableButton}>
        Read more
      </Link>
    </ThumbnailItem>
  );
};

export default Thumbnail;
