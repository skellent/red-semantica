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
  //  imagen: './img/imagen.png'
  //},
  { // MICRO & MACRO
    titulo: 'RETO DIGITAL',
    materia: 'Micro & Macro',
    texto: 'Desarrollo de una solución tecnológica para una problemática financiera en nuestras comunidades.',
    imagen: './img/imagen.jpg'
  },
  { // TECNOLOGÍA
    titulo: 'De 0 a Digital',
    materia: 'Tecnología',
    texto: 'Desarrollo de una aplicación que solucione una problemática en nuestras comunidades.',
    imagen: './img/imagen.jpg'
  },
  { // ORIENTACION VOCACIONAL
    titulo: 'El Costo Oculto del Mal Uso del Celular',
    materia: 'Orientacion Vocacional',
    texto: 'Nose',
    imagen: './img/imagen.jpg'
  },
  { // LENGUAJE Y LITERATURA
    titulo: 'Nose',
    materia: 'Lenguaje y Literatura',
    texto: 'Nose',
    imagen: './img/imagen.jpg'
  },
  { // ECOLOGIA INTEGRAL
    titulo: 'Nose',
    materia: 'Ecología Integral',
    texto: 'Nose',
    imagen: './img/imagen.jpg'
  },
  { // MATEMÁTICAS
    titulo: 'Nose',
    materia: 'Tecnología',
    texto: 'Nose',
    imagen: './img/imagen.jpg'
  },
  { // DISEÑO WEB
    titulo: 'Nose',
    materia: 'Diseño Web',
    texto: 'Nose',
    imagen: './img/imagen.jpg'
  },
  { // BIOLOGÍA
    titulo: 'Nose',
    materia: 'Biología',
    texto: 'Nose',
    imagen: './img/imagen.jpg'
  },
  { // VINCULACION SOCIOLABORAL
    titulo: 'Nose',
    materia: 'Vinculación Sociolaboral',
    texto: 'Nose',
    imagen: './img/imagen.jpg'
  },
  { // INGLÉS
    titulo: 'Nose',
    materia: 'Inglés',
    texto: 'Nose',
    imagen: './img/imagen.jpg'
  },
  { // EDUCACIÓN FÍSICA
    titulo: 'Nose',
    materia: 'Educación Física',
    texto: 'Nose',
    imagen: './img/imagen.jpg'
  },
  { // EDUCACIÓN EN LA FE
    titulo: 'Nose',
    materia: 'Educación en la Fe',
    texto: 'Nose',
    imagen: './img/imagen.jpg'
  },
  { // PROYECTO SOCIOPRODUCTIVO
    titulo: 'Nose',
    materia: 'Proyecto Socioproductivo',
    texto: 'Nose',
    imagen: './img/imagen.jpg'
  },
  { // G.H.S.
    titulo: 'Nose',
    materia: 'Geografía Historia y Soberanía',
    texto: 'Nose',
    imagen: './img/imagen.jpg'
  }
];

const contenedorPrincipal = document.getElementById("contenedor-principal");

let contenido = datos.map(articulo => `
  <article>
    <h2>${articulo.titulo}</h2>
    <h4>${articulo.materia}</h4>
    <p>${articulo.texto}</p>
    <img src="${articulo.imagen}">
  </article>
`).join('');

contenedorPrincipal.innerHTML = contenido;
