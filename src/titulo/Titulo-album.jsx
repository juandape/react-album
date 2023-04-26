import "./titulo.css";

function Titulo(props) {
  const { songTl, songAge } = props;

  return (
    <div className="titulo">
      <h3>{songTl}</h3>
      <h3 className="titulo--age">{songAge}</h3>
    </div>
  );
}

export default Titulo;
