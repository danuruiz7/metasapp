import Encabezado from './components/compartidos/Encabezado';
import Pie from './components/compartidos/Pie';
import Principal from './components/compartidos/Principal';
import Meta from './components/lista/Meta';

function App() {
  return (
    <div className="App">
      <Encabezado />
      <Principal>
        <Meta></Meta>
      </Principal>
      <Pie />
    </div>
  );
}

export default App;
