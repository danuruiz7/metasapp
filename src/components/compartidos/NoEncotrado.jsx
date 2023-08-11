import { Link, useLocation } from 'react-router-dom';

const NoEncotrado = () => {
  const location = useLocation();

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-8xl font-bold text-red-700 mb-10">No Encontrado</h1>
      <p className="text-2xl font-bold text-gray-700 mb-10">
        Lo sentimos, pero la página{' '}
        <span className="text-red-700">{location.pathname}</span> que buscas no
        existe.
      </p>
      <p className="boton text-2xl font-bold text-blue-500 mb-10">
        <Link to="/">Regresar al inicio</Link>
      </p>
    </main>
  );
};

export default NoEncotrado;
