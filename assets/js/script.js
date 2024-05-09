function obtenerFechaActual() {
  const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const fecha = new Date();
  const diaSemana = diasSemana[fecha.getDay()];
  const diaMes = fecha.getDate();
  const mes = meses[fecha.getMonth()];
  const año = fecha.getFullYear();
  return `${diaSemana}, ${diaMes} de ${mes} de ${año}`;
}

// Función para actualizar el contenido del elemento con id "fecha"
function actualizarFecha() {
  document.getElementById('fecha').textContent = obtenerFechaActual();
}

// Llama a la función para actualizar la fecha cuando el documento esté listo
document.addEventListener('DOMContentLoaded', function() {
  actualizarFecha();
});


// SOLUCION 1 PARA BUSCAR

// function searchText() {
//   var searchText = document.getElementById('searchInput').value.trim();
//   if (searchText === '') return; // Evitar búsqueda vacía

//   var content = document.body.innerText;
//   var regex = new RegExp(searchText, 'gi');
//   var matches = content.match(regex);

//   if (matches) {
//     var highlightedContent = content.replace(regex, '<span class="highlight">$&</span>');
//     document.body.innerHTML = highlightedContent;
//   } else {
//     alert('No se encontraron coincidencias.');
//   }
// }
// FIN SOLUCION 1 PARA BUSCAR

// SOLUCION 1 PARA BORRAR
// function clearSearch() {
//   document.getElementById('searchInput').value = ''; // Limpiar el contenido del input
// }
// FIN SOLUCION 1 PARA BORRAR


// SOLUCION 2 PARA TODO
var previousScrollPosition = 0;

function searchText() {
  // Almacenar la posición de desplazamiento actual antes de realizar la búsqueda
  previousScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  var searchText = document.getElementById('searchInput').value.trim();
  if (searchText === '') return; // Evitar búsqueda vacía

  var content = document.body.innerText;
  var regex = new RegExp(searchText, 'gi');
  var matches = content.match(regex);

  if (matches) {
    var highlightedContent = content.replace(regex, '<span class="highlight">$&</span>');
    document.body.innerHTML = highlightedContent;
    document.getElementById('backButton').style.display = 'block'; // Mostrar botón de regresar
  } else {
    alert('No se encontraron coincidencias.');
  }
}

function clearSearch() {
  document.getElementById('searchInput').value = ''; // Limpiar el contenido del input
  document.body.innerHTML = originalContent; // Restaurar contenido original
  window.scrollTo(0, previousScrollPosition); // Regresar a la posición de desplazamiento anterior
  document.getElementById('backButton').style.display = 'none'; // Ocultar botón de regresar
}

function goBack() {
  window.scrollTo(0, previousScrollPosition); // Regresar a la posición de desplazamiento anterior
  document.getElementById('backButton').style.display = 'none'; // Ocultar botón de regresar
}
// FIN SOLUCION 2 PARA TODO

// SOLUCION 3 PARA TODO
var originalContent = document.body.innerHTML; // Guardar el contenido original del cuerpo del documento
var previousScrollPosition = 0;

function searchText() {
  // Almacenar la posición de desplazamiento actual antes de realizar la búsqueda
  previousScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  var searchText = document.getElementById('searchInput').value.trim();
  if (searchText === '') return; // Evitar búsqueda vacía

  var content = document.body.innerText;
  var regex = new RegExp(searchText, 'gi');
  var matches = content.match(regex);

  if (matches) {
    var highlightedContent = content.replace(regex, '<span class="highlight">$&</span>');
    document.getElementById('highlightedContent').innerHTML = highlightedContent; // Agregar contenido resaltado al contenedor
    document.getElementById('backButton').style.display = 'block'; // Mostrar botón de regresar
  } else {
    alert('No se encontraron coincidencias.');
  }
}

function clearSearch() {
  document.getElementById('searchInput').value = ''; // Limpiar el contenido del input
  document.body.innerHTML = originalContent; // Restaurar contenido original
  window.scrollTo(0, previousScrollPosition); // Regresar a la posición de desplazamiento anterior
  // document.getElementById('backButton').style.display = 'none'; // Ocultar botón de regresar
}

// FIN SOLUCION 3 PARA TODO

// function goBack() {
//   window.scrollTo(0, previousScrollPosition); // Regresar a la posición de desplazamiento anterior
//   document.getElementById('backButton').style.display = 'none'; // Ocultar botón de regresar
// }

// FIN SOLUCION 3 PARA TODO
