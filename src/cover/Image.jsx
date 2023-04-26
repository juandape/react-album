import "./image.css";

function CoverImage(props) {
  const { albumImg } = props;

  return <img src={albumImg} />;
}

export default CoverImage;
