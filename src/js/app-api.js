const boton = document.getElementById("botonCargar");
const contenedor = document.getElementById("contenedorContenido");

boton.addEventListener("click", async () => {
  contenedor.innerHTML = "Cargando...";

  try {
    // Consumimos la API de Rick and Morty para el personaje 1
    const res = await fetch("https://rickandmortyapi.com/api/character/3");
    const personaje = await res.json();

    // Inyectamos los datos en el HTML
    contenedor.innerHTML = `
            <h3>${personaje.name}</h3>
            <p>Especie: ${personaje.species}</p>
            <img src="${personaje.image}" alt="${personaje.name}" width="150">
        `;
  } catch (error) {
    contenedor.innerHTML = "Error al cargar los datos.";
  }
});
