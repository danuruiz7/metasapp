export async function pedirMetas() {
  const response = await fetch('http://localhost:3000/api/metas');
  const metas = await response.json();
  // console.log('pedidos', metas);
  return metas;
}

export async function crearMeta(meta) {
  const response = await fetch('http://localhost:3000/api/metas', {
    method: 'POST',
    body: JSON.stringify(meta),
    headers: {
      'content-Type': 'application/json; charset=UTF-8',
    },
  });
  const metaCreada = await response.json();
  console.log('Meta creada', metaCreada);
  return metaCreada;
}

export async function actualizarMeta(meta) {
  const response = await fetch(`http://localhost:3000/api/metas/${meta.id}`, {
    method: 'PUT',
    body: JSON.stringify(meta),
    headers: {
      'content-Type': 'application/json; charset=UTF-8',
    },
  });
  const metaActualizada = await response.json();
  console.log('Meta creada', metaActualizada);
  return metaActualizada;
}

export async function borrarMeta(id) {
  await fetch(`http://localhost:3000/api/metas/${id}`, {
    method: 'DELETE',
  });
  console.log('Borrado');
}
