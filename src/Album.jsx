import "./album.css";

const Album = (props) => {
  const { albumCover, artistName, group, songTl, songYear, genre } = props;

  return (
    <div className="album">
      <div>
        <img src={albumCover} />
      </div>
      <div className="album__info">
        <div className="artist">
          <h1>{artistName}</h1>
          <p className="artist--single">{group}</p>
        </div>
        <div className="titulo">
          <h3>{songTl}</h3>
          <h3 className="titulo--age">{songYear}</h3>
        </div>
        <div className="genero">
          <div className="genero--name">{genre}</div>
          <div className="genero--heart"></div>
        </div>
      </div>
    </div>
  );
};

export default Album;
