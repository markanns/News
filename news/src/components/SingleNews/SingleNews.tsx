import { useNavigate, useLocation } from "react-router-dom";
import { useNewsContext } from "../../context/NewsContext";
import { Wrap } from "../../styles/Global";
import { SingleNewsImage } from "./Styled.SingleNews";

const SingleNews = () => {
  const { handleButtonsState } = useNewsContext();
  const navigate = useNavigate();
  const location = useLocation();
  const passedState = location.state;

  const handleButtonEvents = () => {
    handleButtonsState();
    navigate(-1);
  };
  if (!passedState) {
    navigate("/");
  }

  return (
    <Wrap>
      <h1>{passedState.title}</h1>
      <SingleNewsImage src={passedState.urlToImage} alt={passedState.title} />
      <p>{passedState.content}</p>
      <button type="button" onClick={handleButtonEvents}>
        Go back
      </button>
    </Wrap>
  );
};

export default SingleNews;
