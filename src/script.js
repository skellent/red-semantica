// ####################################################
// ### Desarrollado por Robert Rodríguez "Skellent" ###
// ### En colaboración con terceros                 ###
// ####################################################

// AQUI VAN LOS NOMBRES Y INFORMACION DE CADA MATERIA Y TITULO
const datos = [
  // { PLANTILLA (BORRAR O FORMATEAR DESPUES)
  //  titulo: 'TituloEjemplo',
  //  materia: 'Materia',
  //  texto: 'Blah',
  //  imagen: './img/imagen.png',
  //  relacion: 'Materia, Materia'
  //},
  { // MICRO & MACRO
    titulo: 'Reto Digital',
    materia: 'Micro & Macro',
    texto: 'Desarrollo de una aplicación que solucione una problemática en nuestras comunidades.',
    imagen: './img/micro.jpg',
    relacion: 'Tecnología, Diseño Web, Orientación Vocacional'
  },
  { // TECNOLOGÍA
    titulo: 'De 0 A Digital',
    materia: 'Tecnología',
    texto: 'Desarrollo de una aplicación que solucione una problemática en nuestras comunidades.',
    imagen: './img/tecnologia.jpg',
    relacion: 'Micro & Macro, Diseño Web y Orientación Vocacional'
  },
  { // ORIENTACIÓN VOCACIONAL
    titulo: 'El Costo Oculto Del Mal Uso Del Celular',
    materia: 'Orientación Vocacional',
    texto: 'Proyecto de concientización',
    imagen: './img/orientacion.jpg',
    relacion: 'Todas las materias'
  },
  { // LENGUAJE Y LITERATURA
    titulo: 'Novela Romántica: "María" De Jorge Isaacs',
    materia: 'Lenguaje y Literatura',
    texto: 'No disponible',
    imagen: './img/castellano.jpg',
    relacion: 'Orientación Vocacional'
  },
  { // ECOLOGIA INTEGRAL
    titulo: 'Formulación De Proyectos Socio Ambientales',
    materia: 'Ecología Integral',
    texto: 'Diagrama de Ishikawa',
    imagen: './img/ecologia.jpg',
    relacion: 'Proyecto Socioproductivo, Orientación Vocacional'
  },
  { // MATEMÁTICAS
    titulo: 'No Disponible',
    materia: 'Matemáticas',
    texto: 'No disponible',
    imagen: './img/matematicas.webp',
    relacion: 'Orientación Vocacional'
  },
  { // DISEÑO WEB
    titulo: 'El Costo Económico De Un Mal Diseño En La Tecnología Móvil',
    materia: 'Diseño Web',
    texto: 'No disponible',
    imagen: './img/diseñow.jpg',
    relacion: 'Tecnología, Micro & Macro y Orientación Vocacional'
  },
  { // BIOLOGÍA
    titulo: 'Avances Tecnológicos En La Genética',
    materia: 'Biología',
    texto: 'No disponible',
    imagen: './img/biologia.jpg',
    relacion: 'Orientación Vocacional'
  },
  { // VINCULACION SOCIOLABORAL
    titulo: 'Diseño De Protocolos Para La Productividad Del Pasante',
    materia: 'Vinculación Sociolaboral',
    texto: 'no disponible',
    imagen: './img/vinculacion.jpg',
    relacion: 'Tecnología, Micro & Macro y Orientación Vocacional'
  },
  { // INGLÉS
    titulo: 'Reported Speech',
    materia: 'Inglés',
    texto: 'No disponible',
    imagen: './img/ingles.jpg',
    relacion: 'Orientación Vocacional'
  },
  { // EDUCACIÓN FÍSICA
    titulo: 'El Mundo Del Baloncesto (Basket)',
    materia: 'Educación Física',
    texto: 'Elaboración de una revista histórica sobre el baloncesto en Venezuela y el mundo',
    imagen: './img/deporte.jpg',
    relacion: 'Orientación Vocacional'
  },
  { // EDUCACIÓN EN LA FE
    titulo: 'De La Pantalla Al Prójimo En La Solidaridad',
    materia: 'Educación en la Fe',
    texto: 'no disponible',
    imagen: './img/religion.jpg',
    relacion: 'Tecnología, Micro & Macro y Orientación Vocacional'
  },
  { // PROYECTO SOCIOPRODUCTIVO
    titulo: 'Técnicas De Recolección De Datos',
    materia: 'Proyecto Socioproductivo',
    texto: 'Elaboración de un taller con socialización',
    imagen: './img/proyecto.jpg',
    relacion: 'Ecología Integral, Orientación Vocacional'
  },
  { // G.H.S.
    titulo: 'Importancia De Las Industrias Básicas Y Manufactura De Venezuela',
    materia: 'Geografía, Historia y Soberanía',
    texto: 'Visitas guiadas a las industrias',
    imagen: './img/ghc.jpg',
    relacion: 'Orientación Vocacional'
  }
];

const contenedorPrincipal = document.getElementById("contenedor-principal");

/* Original
<article>
  <h2>${articulo.titulo}</h2>
  <h4>${articulo.materia}</h4>
  <p>${articulo.texto}</p>
  <p><strong>Relación con Otras Materias:</strong> ${articulo.relacion}</p>
  <img src="${articulo.imagen}">
</article>
*/

let contenido = datos.map(articulo => `
  <article>
    <h2>${articulo.titulo}</h2>
    <h4>${articulo.materia}</h4>
    <p><strong>Relación con Otras Materias:</strong> ${articulo.relacion}</p>
    <img src="${articulo.imagen}">
  </article>
`).join('');

contenedorPrincipal.innerHTML = contenido;

// ── Lógica del Reproductor de Audio ──
const audio = document.getElementById('ambient-audio');
const playPauseBtn = document.getElementById('play-pause-btn');
const icon = playPauseBtn.querySelector('.icon');

playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.classList.add('playing');
    icon.textContent = '⏸'; // Icono de pausa
    playPauseBtn.title = 'Pausar música de ambiente';
  } else {
    audio.pause();
    playPauseBtn.classList.remove('playing');
    icon.textContent = '▶'; // Icono de play
    playPauseBtn.title = 'Reproducir música de ambiente';
  }
});

// Opcional: Reiniciar icono si el audio termina (aunque tiene el atributo loop)
audio.addEventListener('ended', () => {
  playPauseBtn.classList.remove('playing');
  icon.textContent = '▶';
});

// ── Efecto Parallax para Nubes ──
document.addEventListener('mousemove', (e) => {
  const clouds = document.querySelectorAll('.cloud');
  const x = (window.innerWidth - e.pageX * 2) / 100;
  const y = (window.innerHeight - e.pageY * 2) / 100;

  clouds.forEach((cloud, index) => {
    const speed = (index + 1) * 0.5;
    cloud.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
  });
});
