import { ThumbnailItem, Image } from "./StyledCategoriesThumbnail";
import { Link } from "react-router-dom";
import { useNewsContext } from "../NewsContext/NewsContext";
import { useLocation } from "react-router-dom";

type ChategorieThumbnailNews = {
  title: string;
  description: string;
  image: string;
  categorie?: string;
};
const ChategoriesThumbnail = ({
  title,
  description,
  image,
  categorie,
}: ChategorieThumbnailNews) => {
  const { handleButtonsState } = useNewsContext();
  const location = useLocation();

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
      {categorie && <Link to={`${location.pathname}/${categorie}/${title}`} onClick={handleDisableButton}>Read more</Link>}
    </ThumbnailItem>
  );
};

export default ChategoriesThumbnail;
