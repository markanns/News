import { useParams, Link } from "react-router-dom";
import { useNewsContext } from "../NewsContext/NewsContext";
import NewsServices from "../NewsService/NewsServices";
import { Wrap } from "../../styles/Global";
import { SingleNewsImage } from "../SingleNews/Styled.SingleNews";
import { useState, useEffect } from "react";

type NewsItem = {
  title: string;
  description: string;
  urlToImage: string;
  content: string;
};

const SingleCategoryNews = () => {
  const { title } = useParams<{ title: string }>();
  const { categorie } = useParams() as { categorie: string };
  // const { businessNews } = useNewsContext();
  // const { technologyNews } = useNewsContext();
  const { handleButtonsState } = useNewsContext();
  const handleDisableButton = () => {
    handleButtonsState();
  };
  const { country } = useNewsContext();
  const [kategorija, setKategorija] = useState<NewsItem[]>([]);

  useEffect(() => {
    NewsServices(country, categorie).then((data) => {
      setKategorija(data);
    });
  }, [country, categorie]);

  let singleCategorieNews;
  singleCategorieNews = kategorija.find((n) => n.title === title);
  // if (categorie === "business") {
  //   singleCategorieNews = businessNews.find((n) => n.title === title);
  // }

  // if (!singleCategorieNews) {
  //   return <div>News not found</div>;
  // }
  console.log(kategorija);

  return (
    <Wrap>
      {singleCategorieNews && (
        <>
          <h1>{singleCategorieNews.title}</h1>
          <SingleNewsImage
            src={singleCategorieNews.urlToImage}
            alt={singleCategorieNews.title}
          />
          <p>{singleCategorieNews.content}</p>
        </>
      )}
      <Link to="/categories" onClick={handleDisableButton}>
        back to categories news
      </Link>
    </Wrap>
  );
};

export default SingleCategoryNews;
