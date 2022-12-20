import { React } from "react";
import "./itemDetalles.css";
import { useParams } from "react-router-dom";

export const ItemDetalles = ({arregloItems}) => {

    const {id} = useParams();

    const {nombre, descripcion, numero} = arregloItems[id - 1];

  return (
    <>
      <div className="containter text-center">
        <h1>{nombre}</h1>
        <h2>{descripcion}</h2>
        <h3>{numero}</h3>
      </div>
    </>
  );
};
