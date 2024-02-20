import ChategoriesThumbnail from "../../CategoriesThumbnail/CategoriesThumbnail";
import { NewsHolder } from "../StyledCategories";
import {LinkItem} from "./StyledTechnology";


type NewsItem = {
  title: string;
  description: string;
  urlToImage: string;
  content: string;
};
const Technology = ({ technologyNews }: { technologyNews: NewsItem[] }) => {
  const teschnologyNewsList = technologyNews
    .slice(0, 5)
    .map((item, index) => (
      <ChategoriesThumbnail
        key={index}
        title={item.title}
        description={item.description}
        image={item.urlToImage}
        categorie="technology"
      />
    ));

  return (
    <div>
      <LinkItem to="technology/allcategorie">Technology</LinkItem>
      <NewsHolder>{teschnologyNewsList}</NewsHolder>
    </div>
  );
};

export default Technology;
