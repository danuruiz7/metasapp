import { useContext, useEffect, useState } from 'react';
import { Contexto } from '../../servicios/Memoria';
import { useNavigate, useParams } from 'react-router-dom';

const Detalles = () => {
  const { id } = useParams();

  const [form, setForm] = useState({
    detalles: '',
    eventos: 1,
    periodo: 'semana',
    icono: '🏃‍♂️',
    meta: 52,
    plazo: '2030-10-01',
    completado: 0,
  });

  const [estado, enviar] = useContext(Contexto);

  const { detalles, eventos, periodo, icono, meta, plazo, completado } = form;

  const navegar = useNavigate();

  useEffect(() => {
    const metaMemoria = estado.objetos[id];
    if (!id) return;
    if (!metaMemoria) {
      return navegar('/list');
    }
    setForm(metaMemoria);
  }, [id]);

  const handleChanges = (e, prop) => {
    setForm((estado) => ({ ...estado, [prop]: e.target.value }));
  };

  const crear = async () => {
    enviar({ tipo: 'crear', meta: form });
    navegar('/list');
  };

  const actualizar = () => {
    enviar({ tipo: 'actualizar', meta: form });
    navegar('/list');
  };

  const borrar = () => {
    enviar({ tipo: 'borrar', id });
    navegar('/list');
  };

  const cancelar = () => {
    navegar('/list');
  };

  const opcionesDeFrecuencia = ['Al dia', 'A la semana', 'Al mes', 'Al año'];
  const icons = ['💻', '🏃‍♂️', '📚', '✈', '💸', '🍆'];

  return (
    <div className="tarjeta">
      <form className="p-4" action="">
        <label className="label">
          Describe tu meta
          <input
            className="input"
            placeholder="ej. 52 caminatas"
            type="text"
            value={detalles}
            onChange={(e) => handleChanges(e, 'detalles')}
          />
        </label>

        <label className="label">
          ¿Con que frecuencia deseas realizar tu meta?{' '}
          <span>(ej. 1 vez a la semana)</span>
          <div className="flex mb-6 gap-4">
            <input
              className="input"
              type="number"
              placeholder="ej. 1"
              value={eventos}
              onChange={(e) => handleChanges(e, 'eventos')}
            />
            <select
              className="input"
              value={periodo}
              onChange={(e) => handleChanges(e, 'periodos')}
            >
              {opcionesDeFrecuencia.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
        </label>

        <label className="label">
          ¿Cuantas veces deseas completar esta meta?
          <input
            placeholder="52"
            className="input"
            type="number"
            value={meta}
            onChange={(e) => handleChanges(e, 'meta')}
          />
        </label>

        <label className="label">
          ¿Tienes una fecha limite?
          <input
            className="input"
            type="date"
            value={plazo}
            onChange={(e) => handleChanges(e, 'plazo')}
          />
        </label>

        <label className="label">
          ¿Cuantas veces haz completado ya esta meta?
          <input
            placeholder="15"
            className="input"
            type="number"
            value={completado}
            onChange={(e) => handleChanges(e, 'completado')}
          />
        </label>

        <label className="label">
          Escoge el icono para la meta
          <select
            className="input"
            value={icono}
            onChange={(e) => handleChanges(e, 'icono')}
          >
            {icons.map((icon) => (
              <option key={icon} value={icon}>
                {icon}
              </option>
            ))}
          </select>
        </label>
      </form>

      <div className="botones">
        {!id && (
          <button className="boton boton--black" onClick={crear}>
            Crear
          </button>
        )}
        {id && (
          <button className="boton boton--black" onClick={actualizar}>
            Actualizar
          </button>
        )}
        {id && (
          <button className="boton boton--rojo" onClick={borrar}>
            Borrar
          </button>
        )}
        <button className="boton boton--white" onClick={cancelar}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default Detalles;
