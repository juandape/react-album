import "./genero.css";

function Genero(props) {
  const { genre } = props;
  return (
    <div className="genero">
      <div className="genero--name">{genre}</div>
      <div className="genero--heart"></div>
    </div>
  );
}

export default Genero;
