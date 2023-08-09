import Encabezado from './components/compartidos/Encabezado';
import Pie from './components/compartidos/Pie';
import Principal from './components/compartidos/Principal';
import Lista from './components/lista/Lista';
import Detalles from './components/nueva/Detalles';

function App() {
  return (
    <div className="App">
      <Encabezado />
      <Principal>
        {/* <Lista></Lista> */}
        <Detalles />
      </Principal>
      <Pie />
    </div>
  );
}

export default App;
