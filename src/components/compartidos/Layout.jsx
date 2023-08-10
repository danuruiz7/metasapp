import { Outlet } from 'react-router-dom';
import Encabezado from './Encabezado';
import Pie from './Pie';
import Principal from './Principal';

const Layout = () => {
  return (
    <div className="App">
      <Encabezado />
      <Principal>
        <Outlet></Outlet>
      </Principal>
      <Pie />
    </div>
  );
};

export default Layout;
