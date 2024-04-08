// Funcion para cargar la cantidad de entradas, la seccion seleccionada y el total desde el localStorage al cargar la pagina
window.onload = function() {
    // Obtener la cantidad de entradas, la seccion seleccionada y la confirmación de selección del localStorage
    let storedCantidadEntradas = localStorage.getItem('cantidadEntradas');
    let storedSeccionSeleccionada = localStorage.getItem('seccionSeleccionada');
    let storedPrecioEntrada = localStorage.getItem('precioEntrada');
    let seleccionConfirmada = localStorage.getItem('seleccionConfirmada');

    // Verificar en que parte esta el usuario
    if (seleccionConfirmada === "true") {
        seccionActual = "cantidadEntradas";
    } else if (storedSeccionSeleccionada) {
        seccionActual = "seleccionTribuna";
    }
  
    // Restaurar el estado segun la seccion actual
    if (seccionActual === "cantidadEntradas") {
      // Restaurar la cantidad de entradas y la sección seleccionada
      cantidadEntradas = parseInt(storedCantidadEntradas);
      seccionSeleccionada = storedSeccionSeleccionada;
      precioEntrada = parseFloat(storedPrecioEntrada);
  
    
      // Mostrar la informacion restaurada
      document.getElementById("seleccionado").textContent = "Tribuna seleccionada: " + seccionSeleccionada;
      document.getElementById("titulo").textContent = "Partido despedida Enzo Perez"; // Siempre establece el título como "Partido despedida"
      document.getElementById("subtitulo").style.display = "none"; // Oculta el subtitulo
      contenedor.style.display = "none";
      document.getElementById("botonConfirmar").style.display = "none";
      document.getElementById("seleccionado").style.display = "block";
  
      // Mostrar botones de suma y resta de entradas
      let botonesCantidad = document.getElementById("botonesCantidad");
      botonesCantidad.style.display = "block";
  
      // Mostrar boton de atras
      document.getElementById("atras").style.display = "block";
  
      // Desplazar hacia la sección de las entradas
      document.getElementById("botonesCantidad").scrollIntoView();
  
      // Nuevo: Si hay un precio de entrada almacenado, asignarlo a la variable precioEntrada
      if (storedPrecioEntrada) {
        precioEntrada = parseFloat(storedPrecioEntrada);
      }
  
      // Obtener el total del localStorage
      let storedTotal = localStorage.getItem('total');
      
      // Si hay un total almacenado, actualizar la variable total y mostrarlo
      if (storedTotal) {
        total = parseInt(storedTotal);
        document.getElementById("total").textContent = "Total: $" + total;
        document.getElementById("cantidad").textContent = "Cantidad de entradas: " + cantidadEntradas;
      } else {
        // Si no hay un total almacenado, calcularlo nuevamente
        total = precioEntrada * cantidadEntradas;
        actualizarTotal();
      }
    } else if (seccionActual === "seleccionTribuna") {
    }
  };
