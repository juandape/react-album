import "./App.css";
import CoverImage from "./cover/Image";
import Artist from "./Artist/Artist-name";
import Titulo from "./titulo/Titulo-album";
import Genero from "./genero/Genero-song";
import rozes from "./cover/assets/rozes.jpg";

function App() {
  return (
    <>
      <div className="album">
        <div>
          <CoverImage albumImg={rozes} />
        </div>
        <div className="album__info">
          <Artist artistName="Rozes" group="solista" />
          <Titulo songTl="Under the Grave" songAge="(2016)" />
          <Genero genre="dance" />
        </div>
      </div>
    </>
  );
}

export default App;
