import placeholderImage from "../../assets/placeholderImage.png";

const ImagePlaceholder = () => {
  const imageStyle = {
    width: "300px",
    height: "300px",
  };
  return (
    <div>
      <img style={imageStyle} src={placeholderImage} alt="placeholder" />
      <h2>Loading title...</h2>
      <p>Loading description...</p>
    </div>
  );
};

export default ImagePlaceholder;
