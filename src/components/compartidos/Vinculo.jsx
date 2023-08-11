import { Link } from 'react-router-dom';
import estilos from './Vinculo.module.css';

const Vinculo = ({ children, texto, to }) => {
  return (
    <Link to={to} className={estilos.vinculo}>
      {children}
      <span className="">{texto}</span>
    </Link>
  );
};

export default Vinculo;
