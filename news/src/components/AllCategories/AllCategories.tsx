import { useParams } from "react-router-dom";
import { useNewsContext } from "../NewsContext/NewsContext";
import ChategoriesThumbnail from "../CategoriesThumbnail/CategoriesThumbnail";
import { NewsHolder } from "../News/StyledNews";
import { Wrap } from "../../styles/Global";

const AllCategories = () => {
  const { businessNews } = useNewsContext();
  const { technologyNews } = useNewsContext();
  const { categorie } = useParams<{ categorie: string }>();

  let allCategorieNews;
  if (categorie === "technology") {
    allCategorieNews = (
      <>
        {technologyNews.map((item, index) => (
          <ChategoriesThumbnail
          key={index}
          title={item.title}
          description={item.description}
          image={item.urlToImage}
        />
        ))}
      </>
    );
  }
  if (categorie === "business") {
    allCategorieNews = (
      <>
        {businessNews.map((item, index) => (
          <ChategoriesThumbnail
          key={index}
          title={item.title}
          description={item.description}
          image={item.urlToImage}
        />
        ))}
      </>
    );
  }

  
  return (
    <div>
      <Wrap>
        <h1>{categorie}</h1> 
        <NewsHolder>
          {allCategorieNews}
        </NewsHolder>
      </Wrap>
    </div>
  );
};

export default AllCategories;
