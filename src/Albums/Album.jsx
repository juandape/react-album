import "./album.css";
import Like from "./heart";
import PropTypes from "prop-types";

const Album = (props) => {
  const { albumCover, artistName, group, songTl, songYear, genre } = props;

  return (
    <div className="album">
      <div>
        <img src={albumCover} />
      </div>
      <div className="album__info">
        <div className="album__artist">
          <h1>{artistName}</h1>
          <p className="album__artist--group">{group}</p>
        </div>
        <div className="album__titulo">
          <h3>{songTl}</h3>
          <h3 className="album__titulo--age">{songYear}</h3>
        </div>
        <div className="album__genero">
          <div className="album__genero--name">{genre}</div>
          <div className="album__genero--heart">
            <Like />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;

Album.propTypes = {
  albumCover: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  songTl: PropTypes.string.isRequired,
  songYear: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
}