import { useNavigate } from 'react-router-dom';
import estilos from './Meta.module.css';
import { useState } from 'react';

const Meta = ({ id, icono, eventos, periodo, detalles, meta, completado }) => {
  const navegar = useNavigate();
  const [addComple, setAddComple] = useState(completado);

  const completar = (completado) => {
    // const parseado = parseInt(completado);
    // const nuevoComple = parseado + 1;
    // console.log(nuevoComple);
    // setAddComple(nuevoComple);
  };

  const editar = (id) => {
    navegar(`/list/${id}`);
  };

  return (
    <div className={estilos.meta + ' tarjeta'}>
      <div className="flex items-center">
        <div className={estilos.icono}>{icono}</div>
        <p className="text-xl ml-5 mr-10">
          {eventos}
          <sub className="text-xs text-gray-500 ml-1">/ {periodo}</sub>
        </p>
        <p>{detalles}</p>
      </div>
      <div className="flex">
        <div className="relative m-2 mx-5">
          <p className="text-center">
            {addComple} de {meta}
          </p>
          <div className={estilos.barra1}>
            <div
              style={{ width: `${Math.round((addComple / meta) * 100)}%` }}
              className={estilos.barra2}
            ></div>
          </div>
        </div>

        <button className="boton mr-3 boton--green " onClick={() => editar(id)}>
          Editar
        </button>

        <button className="boton" onClick={() => completar(addComple)}>
          Completado
        </button>
      </div>
    </div>
  );
};

export default Meta;
