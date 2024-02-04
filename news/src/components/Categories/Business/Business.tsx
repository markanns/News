import Thumbnail from "../../Thumbnail/Thumbnail";
import { NewsHolder } from "../StyledCategories";

type NewsItem = {
  title: string;
  description: string;
  urlToImage: string;
  content: string;
};
const Business = ({ businessNews }: { businessNews: NewsItem[] }) => {
  const businessNewsList = businessNews
    .slice(0, 5)
    .map((item, index) => (
      <Thumbnail
        key={index}
        title={item.title}
        description={item.description}
        image={item.urlToImage}
      />
    ));

  return (
    <div>
      <NewsHolder>{businessNewsList}</NewsHolder>
    </div>
  );
};

export default Business;
