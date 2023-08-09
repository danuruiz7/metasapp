import estilos from './Encabezado.module.css';
import LogoSVG from '../../img/LogoSVG';
import PerfilSVG from '../../img/PerfilSVG';

const Encabezado = () => {
  return (
    <header className={estilos.encabezado}>
      <div className={estilos.contenedor}>
        <LogoSVG />
        <a className={estilos.titulo} href="/">
          Metas App
        </a>
      </div>
      <nav>
        <a
          href="/perfil"
          className="flex items-center px-4 h-xl hover:bg-gray-200"
        >
          <PerfilSVG />
        </a>
      </nav>
    </header>
  );
};

export default Encabezado;
