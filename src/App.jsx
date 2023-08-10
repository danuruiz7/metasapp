import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import Lista from './components/lista/Lista';
import Detalles from './components/nueva/Detalles';
import Layout from './components/compartidos/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Lista />} />
        <Route path="/list" element={<Lista />} />
        <Route path="/crear" element={<Detalles />} />
      </Route>
      <Route path="*" element={<h1>No Encontrado</h1>} />
    </Routes>
  );
}

export default App;
