import ListaSVG from '../../img/ListaSVG';
import NuevaSVG from '../../img/NuevaSVG';
import estilos from './Principal.module.css';
import Vinculo from './Vinculo';

const Principal = ({ children }) => {
  return (
    <div className={estilos.principal}>
      <aside className={estilos.aside}>
        <Vinculo href="/list" texto="Lista de Metas">
          <ListaSVG />
        </Vinculo>
        <Vinculo href="/crear" texto="Nueva Meta">
          <NuevaSVG />
        </Vinculo>
      </aside>
      <main className={estilos.main}>{children}</main>
    </div>
  );
};

export default Principal;
