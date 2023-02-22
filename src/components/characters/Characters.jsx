import React from "react";
import '../characters/Characters.css';


const Characters = ({characters =[]}) => {
  return (
    <div className="row">
      {characters.map((item, index) => (
        <div key={index} className="col">
          <div className="card mb-3">
            <img src={item.image} alt="/" />  {/* viene de la informacion de la api */}
            <div className="card-body">
              <h3 className="card-title">{item.name}</h3>
              <hr></hr>
              <p><span className="description">Especie:</span>{item.species}</p>
              <p><span className="description">Genero:</span>{item.gender}</p>
              <p><span className="description">localidad:</span>{item.location.name}</p>
            </div>
          </div>
        </div>
      ))}
   
    </div>
  );
};

export default Characters;
