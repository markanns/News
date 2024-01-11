import { ThumbnailItem, Image } from "./StyledThumbnail";

type ThumbnailNews = {
  title: string;
  description: string;
  image: string;
};

const Thumbnail = ({ title, description, image }: ThumbnailNews) => {
  const defaultImage =
    "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg";
  return (
    <ThumbnailItem>
      <h3>{title}</h3>
      <Image src={image || defaultImage} alt={title} />
      <p>{description}</p>
    </ThumbnailItem>
  );
};

export default Thumbnail;
