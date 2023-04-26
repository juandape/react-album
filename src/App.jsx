import "./App.css";
import CoverImage from './cover/Image';
import Artist from './Artist/Artist-name';
import Titulo from './titulo/Titulo-album';
import Genero from './genero/Genero-song'

function App() {
  return (
    <>
      <div className="album">
        <div>
        <CoverImage />
        </div>
        <div className="album__info">
        <Artist />
        <Titulo />
        <Genero />
        </div>
      </div>
    </>
  );
}

export default App;
