import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import Lista from './components/lista/Lista';
import Detalles from './components/nueva/Detalles';
import Layout from './components/compartidos/Layout';
import NoEncotrado from './components/compartidos/NoEncotrado';
import Modal from './components/compartidos/Modal';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Lista />} />
        <Route path="/list" element={<Lista />}>
          <Route
            path="/list/:id"
            element={
              <Modal>
                <Detalles />
              </Modal>
            }
          />
        </Route>

        <Route path="/crear" element={<Detalles />} />
      </Route>
      <Route path="*" element={<NoEncotrado />} />
    </Routes>
  );
}

export default App;
