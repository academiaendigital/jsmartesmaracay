// Función asíncrona para buscar un usuario de GitHub
async function obtenerUsuario() {
  try {
    const respuesta = await fetch("https://api.github.com/users/octocat");

    if (!respuesta.ok) {
      throw new Error("No se pudo conectar con la API");
    }

    const datos = await respuesta.json(); // Convierte la respuesta a formato JSON
    console.log(datos.name); // Imprime el nombre en consola
  } catch (error) {
    console.error("Hubo un error:", error);
  }
}

obtenerUsuario();
