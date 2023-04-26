import "./App.css";
import Album from "./Album";

const albums = [
  {
    albumCover:
      "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/0f/90/cc/0f90ccce-c3c3-93f8-4776-422566d47557/191018104702.jpg/600x600bf-60.jpg",
    artistName: "Rozes",
    group: "solista",
    songTl: "Under the Grave",
    songYear: "(2016)",
    genre: "dance",
  },
  {
    albumCover: "https://cdn.worldvectorlogo.com/logos/aerosmith-1.svg",
    artistName: "Aerosmith",
    group: "band",
    songTl: "I don´t wanna miss a thing",
    songYear: "(1998)",
    genre: "Rock",
  },
];

function App() {
  return (
    <>
      {albums.map((album, index) => {
        return (
          <Album
            key={index}
            albumCover={album.albumCover}
            artistName={album.artistName}
            group={album.group}
            songTl={album.songTl}
            songYear={album.songYear}
            genre={album.genre}
          />
        );
      })}
    </>
  );
}

export default App;
