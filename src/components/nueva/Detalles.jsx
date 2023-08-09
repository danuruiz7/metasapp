const Detalles = () => {
  const opcionesDeFrecuencia = ['dia', 'semana', 'mes', 'año'];
  const icons = ['💻', '🏃‍♂️', '📚', '✈', '💸', '🍆'];

  return (
    <div>
      <form action="">
        <label>
          Describe tu meta
          <input placeholder="ej. 52 caminatas" type="text" />
        </label>
        <label>
          ¿Con que frecuencia deseas realizar tu meta?{' '}
          <span>(ej. 1 vez a la semana)</span>
          <div>
            <input type="number" />
            <select>
              {opcionesDeFrecuencia.map((opcion) => (
                <opcion key={opcion} value={opcion}>
                  {opcion}
                </opcion>
              ))}
            </select>
          </div>
        </label>
        <label>
          ¿Cuantas veces deseas completar esta meta?
          <input type="number" />
        </label>
        <label>
          ¿Tienes una fecha limite?
          <input type="date" />
        </label>
        <label>
          ¿Cuantas veces haz completado ya esta meta?
          <input type="number" />
        </label>
        <label>
          Escoge el icono para la meta
          <select>
            {icons.map((icon) => (
              <option key={icon} value={icon}>
                {icon}
              </option>
            ))}
          </select>
        </label>
      </form>
      <div>
        <button>Crear</button>
        <button>Cancelar</button>
      </div>
    </div>
  );
};

export default Detalles;
