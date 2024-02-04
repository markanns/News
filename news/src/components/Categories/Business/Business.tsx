import ChategoriesThumbnail from "../../CategoriesThumbnail/CategoriesThumbnail";
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
      <ChategoriesThumbnail
        key={index}
        title={item.title}
        description={item.description}
        image={item.urlToImage}
        categorie="business"
      />
    ));

  return (
    <div>
      <h2>Business</h2>
      <NewsHolder>{businessNewsList}</NewsHolder>
    </div>
  );
};

export default Business;
