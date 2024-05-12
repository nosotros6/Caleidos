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

// BUSCADOR 1 CON BOOTSTRAP
$(document).ready(function() {
  $("#searchForm").submit(function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    var searchText = $("#searchInput").val().trim().toLowerCase();
    var content = $("#content").html(); // Obtén el contenido HTML

    if (searchText !== "") {
      var regex = new RegExp(searchText, "gi");
      var highlightedContent = content.replace(regex, "<mark>$&</mark>");
      $("#content").html(highlightedContent); // Actualiza el contenido con las palabras resaltadas
    } else {
      $("#content").html(content); // Restaura el contenido original si no hay texto de búsqueda
    }
  });

  $("#clearSearch").click(function() {
    $("#searchInput").val(""); // Limpia el campo de búsqueda
    location.reload(); // Recarga la página
  });
});
