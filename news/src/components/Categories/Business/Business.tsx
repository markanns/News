import ChategoriesThumbnail from "../../CategoriesThumbnail/CategoriesThumbnail";
import { NewsHolder } from "../StyledCategories";
// import { Link } from "react-router-dom";
import {LinkItem} from "./StyledBusiness";

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
      <LinkItem to="business/allcategorie">Business</LinkItem>
      <NewsHolder>{businessNewsList}</NewsHolder>
    </div>
  );
};

export default Business;
