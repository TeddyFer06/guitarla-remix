export async function getCursos() {
   const respuesta = await fetch(
      `${process.env.API_URL}/guitarras?populate=imagen`
   );
   return await respuesta.json();
}
