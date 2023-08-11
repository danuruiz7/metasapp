export async function pedirMetas() {
  const response = await fetch('/api/metas');
  const metas = await response.json();
  return metas;
}
