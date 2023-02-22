import React from "react";
import { Button } from "react-bootstrap";
import './Sheets.css'
const sheets = ({ previoius, next, onPrevious, onNext}) => {

   const handlePrevious = () =>{
    onPrevious();
   }
   
   const handleNext = () =>{
     onNext();
   }

  return (
    <div>
      <ul className="sheets">
         {/* ternario para controlar si la api tiene pagina anterior la muestra */}
        {
          previoius ?      
        <Button className="btn" variant="info" onClick={""}>Anterior</Button>
          : null
        }

        {
          next ?
        <Button className="btn" variant="info" onClick={""}>Siguiente</Button>
         :null
        }
      </ul>
    </div>
  );
};

export default sheets;
