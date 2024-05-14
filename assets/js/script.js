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
      var content = $("#buscadorFinal").text().trim().toLowerCase(); // Obtén el contenido de texto en minúsculas
  
      if (searchText !== "") {
        var regex = new RegExp(searchText, "gi");
        var matches = content.match(regex); // Busca coincidencias en el contenido de texto
  
        if (matches !== null) {
          var highlightedContent = $("#buscadorFinal").html().replace(regex, "<mark>$&</mark>");
          $("#buscadorFinal").html(highlightedContent); // Actualiza el contenido con las palabras resaltadas
        } else {
          showAlertNoMatches(); // Muestra un mensaje de alerta si no hay coincidencias
        }
      } else {
        showAlertEmptyInput(); // Muestra un mensaje de alerta si el campo de búsqueda está vacío
      }
    });
  
    $("#clearSearch").click(function() {
      $("#searchInput").val(""); // Limpia el campo de búsqueda
      location.reload(); // Recarga la página

      // $("#buscadorFinal").html($("#buscadorFinal").text()); // ELIMINADO Restaura el contenido original
    });
  
    // Función para mostrar un mensaje de alerta si el campo de búsqueda está vacío
    function showAlertEmptyInput() {
      alert("Por favor, ingresa una palabra para buscar.");
    }
  
    // Función para mostrar un mensaje de alerta si no hay coincidencias
    function showAlertNoMatches() {
      alert("No se encontraron coincidencias.");
    }
  });
