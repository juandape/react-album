import "./artist.css";

function Artist(props) {
  const { artistName, group } = props;

  return (
    <>
      <div className="artist">
        <h1>{artistName}</h1>
        <p className="artist--single">{group}</p>
      </div>
    </>
  );
}

export default Artist;
