import { useEffect, useState } from "react";
import { useNewsContext } from "../../NewsContext/NewsContext";
import Thumbnail from "../../Thumbnail/Thumbnail";
import { NewsHolder } from "../StyledCategories";

// type NewsItem = {
//   title: string;
//   description: string;
//   urlToImage: string;
//   content: string;
// };
const Business = () => {
  const { country } = useNewsContext();
  // const { businessNews } = useNewsContext();
  const [businessNews, setBusinessNews] = useState<NewsItem[]>([]);

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
