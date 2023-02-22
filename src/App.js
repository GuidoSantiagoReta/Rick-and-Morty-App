import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import Characters from "./components/characters/Characters";
import Sheets from "./components/sheets/Sheets";
import Footer from "./components/footer/Footer";

function App() {
  const [characters, setCharacters] = useState([]);

  {/*useState para almacenar la informacion */}
  const [info, setInfo] = useState({});

  const initialUrl ="https://rickandmortyapi.com/api/character"

  const charactersFetch = (url) => {
    fetch(url)
    
      .then((response) => response.json())
      
      .then((data) => {

      setCharacters(data.results);
      setInfo(data.info);

     })

      .catch((error) => console.log(error));
  };
  
  {/*definiendo las funciones de los eventos */}

  const onPrevious  =() =>{
    charactersFetch (info.prev)
  }

  const onNext  =() =>{
    charactersFetch (info.next)
  }



  useEffect(() => {
    charactersFetch(initialUrl);
  }, []);

  return (
    <>
     <div className="app">
      <Nav />
      

      <div className="container mt-5">
      <Sheets prev={info.prev} 
              next={info.next} 
              onPrevious={onPrevious} 
              onNext={onNext}/>                {/*1- pasando las propiedades de la api  2- recibiendo las funciones de los eventos */}
        <Characters characters={characters}/>  {/*recibe a los personajes y se pasa por props a nuestro componente Characters.jsx*/}
        <Sheets/>
        
      </div>
      </div>
      <Sheets prev={info.prev} 
              next={info.next} 
              onPrevious={onPrevious} 
              onNext={onNext}/> 
              <Footer/>
    </>
  );
}

export default App;
