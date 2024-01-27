import { useParams, Link } from 'react-router-dom';
import { useNewsContext } from '../NewsContext/NewsContext';
import { Wrap } from "../../styles/Global";
import { SingleNewsImage } from "./Styled.SingleNews";

const SingleNews = () => {
    const { title } = useParams<{ title: string }>();
    const { news } = useNewsContext();
    const { handleButtonsState } = useNewsContext();
    const handleDisableButton = () => {
      handleButtonsState();
    }
    const singleNews = news.find(n => n.title === title);

    if (!singleNews) {
        return <div>
            News not found
        </div>;
    }
    return (
        <Wrap>
            <h1>{singleNews.title}</h1>
            <SingleNewsImage src={singleNews.urlToImage} alt={singleNews.title} />
            <p>{singleNews.content}</p>
            <Link to="/topNews" onClick={handleDisableButton}>back to news</Link>
        </Wrap>
    );
};

export default SingleNews;