import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import Lista from './components/lista/Lista';
import Detalles from './components/nueva/Detalles';
import Layout from './components/compartidos/Layout';
import NoEncotrado from './components/compartidos/NoEncotrado';
import Modal from './components/compartidos/Modal';
import { useContext, useEffect } from 'react';
import { Contexto } from './servicios/Memoria';
import { pedirMetas } from './servicios/Pedidos';

function App() {
  const [, enviar] = useContext(Contexto);

  useEffect(() => {
    async function obtenerYColocarMetas() {
      try {
        const metas = await pedirMetas();
        // console.log('efecto', metas);
        enviar({ tipo: 'colocar', metas });
      } catch (error) {
        console.error('Error al obtener metas:', error);
      }
    }

    obtenerYColocarMetas();
  }, []);

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
