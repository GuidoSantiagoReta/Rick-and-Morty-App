import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import Characters from "./components/characters/Characters";
import Sheets from "./components/sheets/Sheets";
function App() {
  const [characters, setCharacters] = useState([]);

  const charactersFetch = () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    charactersFetch("https://rickandmortyapi.com/api/character");
  }, []);

  return (
    <>
     <div className="app">
      <Nav />
      

      <div className="container mt-5">
      <Sheets/>
        <Characters characters={characters}/>  {/*recibe a los personajes y se pasa por props a nuestro componente Characters.jsx*/}
        <Sheets/>
      </div>
      </div>
    </>
  );
}

export default App;
