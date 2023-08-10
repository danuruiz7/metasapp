import estilos from './Encabezado.module.css';
import LogoSVG from '../../img/LogoSVG';
import PerfilSVG from '../../img/PerfilSVG';
import { Link } from 'react-router-dom';

const Encabezado = () => {
  return (
    <header className={estilos.encabezado}>
      <div className={estilos.contenedor}>
        <LogoSVG />
        <Link className={estilos.titulo} to="/">
          Metas App
        </Link>
      </div>
      <nav>
        <Link
          to="/perfil"
          className="flex items-center px-4 h-xl hover:bg-gray-200"
        >
          <PerfilSVG />
        </Link>
      </nav>
    </header>
  );
};

export default Encabezado;
