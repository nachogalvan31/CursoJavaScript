// Variable para controlar si es la primera vez que se carga la página
let primeraCarga = true;

// Variable para controlar en qué parte del flujo del programa se encuentra el usuario
let seccionActual = "";

// Toastify
function mostrarNotificacion(mensaje, tipo) {
    Toastify({
      text: mensaje,
      duration: 3000, // Duración en milisegundos
      gravity: "top", // Posición de la notificación
      position: "right", // Posición de la notificación
      style: {
        background: tipo === "error" ? "red" : "green",
        color: "white",
        borderRadius: "5px", // Ajusta el radio de los bordes según tu preferencia
    },
    // Agregar la siguiente línea si deseas quitar la punta de los bordes
    // close: false,
}).showToast();
}

// Cargar el archivo JSONs
fetch('js/data.json')
  .then(response => response.json())
  .then(data => mostrarContenido(data))

let cantidadEntradas = 1; // Inicialmente, se venderá una entrada
const maximoEntradas = 4; // Máximo de entradas permitidas

// Variable para almacenar el precio de la tribuna seleccionada
let precioEntrada = 0;

// Variable para almacenar la sección seleccionada
let seccionSeleccionada = null;

// Variable para almacenar el total
let total = 0;

// Nuevo: Limpiar el localStorage excepto los correos electrónicos guardados
function limpiarLocalStorage() {
    let emails = JSON.parse(localStorage.getItem("emails")) || [];
    localStorage.clear();
    localStorage.setItem("emails", JSON.stringify(emails));
   // Guardar el correo electronico ingresado antes de limpiar localStorage
   let email = document.getElementById("email").value;
   if (isValidEmail(email) && !emailAlreadyUsed(email)) {
     saveEmail(email);
   }
  // Mostrar notificación de limpieza en progreso
  mostrarNotificacion("En los próximos minutos recibirá un correo electrónico para continuar con el pago", "info");

  // Retrasar la recarga de la pagina después de 4 segundos
  setTimeout(function() {
    location.reload(); // Recargar la pagina
  }, 4000);
}
  // Guardar el correo electronico ingresado antes de limpiar localStorage
  let email = document.getElementById("email").value;
  if (isValidEmail(email) && !emailAlreadyUsed(email)) {
    saveEmail(email);
  }



// Funcion para actualizar el total según la cantidad de entradas seleccionadas
function actualizarTotal() {
  total = precioEntrada * cantidadEntradas;
  document.getElementById("total").textContent = "Total: $" + total;
  document.getElementById("cantidad").textContent = "Cantidad de entradas: " + cantidadEntradas;

  // Guardar la cantidad de entradas, la seccion seleccionada y el total en el localStorage
  localStorage.setItem('cantidadEntradas', cantidadEntradas);
  localStorage.setItem('seccionSeleccionada', seccionSeleccionada);
  localStorage.setItem('total', total);
}

// Funcion para crear elementos HTML con nombre, precio y casilla de verificación
function crearElemento(seccion) {
  let div = document.createElement("div");
  let radio = document.createElement("input");
  radio.type = "radio";
  radio.name = "seccion"; 
  let label = document.createElement("label");
  label.textContent = seccion.nombre + " - Precio: $" + seccion.precio;
  
  // Al hacer clic en el radio, actualiza el precio de la entrada seleccionada
  radio.addEventListener("click", function() {
    precioEntrada = seccion.precio;
    actualizarTotal();
    seccionSeleccionada = seccion.nombre; // Guardar la sección seleccionada

    // Guardar el precio de la entrada en el localStorage
    localStorage.setItem('precioEntrada', precioEntrada);
  });
  
  div.appendChild(radio);
  div.appendChild(label);
  return div;
}

// Funcion para validar un correo electrónico
function isValidEmail(email) {
  let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

// Funcion para verificar si el correo electrónico ya fue usado
function emailAlreadyUsed(email) {
  let emails = JSON.parse(localStorage.getItem("emails")) || [];
  return emails.includes(email);
}

// Funcion para guardar el correo electrónico en localStorage
function saveEmail(email) {
  let emails = JSON.parse(localStorage.getItem("emails")) || [];
  emails.push(email);
  localStorage.setItem("emails", JSON.stringify(emails));
}

// Funcion para mostrar el contenido del JSON en el HTML
function mostrarContenido(data) {
  let contenedor = document.getElementById("contenedor");

  data.forEach(function(seccion) {
    let elemento = crearElemento(seccion);
    contenedor.appendChild(elemento);
  });

  document.getElementById("botonConfirmar").addEventListener("click", function() {
    let seleccion = document.querySelector('input[name="seccion"]:checked');
    if (seleccion) {
      seccionSeleccionada = seleccion.parentNode.textContent.trim();
      total = precioEntrada * cantidadEntradas; // Calcular el total

       // Guardar la seleccion confirmada en localStorage
       localStorage.setItem('seleccionConfirmada', true);

      document.getElementById("seleccionado").textContent = "Tribuna seleccionada: " + seccionSeleccionada;
      document.getElementById("titulo").textContent = "Partido despedida Enzo Perez"; // Siempre establece el título como "Partido"
      document.getElementById("subtitulo").style.display = "none"; // Oculta el subtitulo
      contenedor.style.display = "none";
      document.getElementById("botonConfirmar").style.display = "none";
      document.getElementById("seleccionado").style.display = "block";

      // Mostrar botones de suma y resta de entradas
      let botonesCantidad = document.getElementById("botonesCantidad");
      botonesCantidad.style.display = "block";

      // Mostrar botón "Atras"
      document.getElementById("atras").style.display = "block";
      actualizarTotal();
    } else {
        mostrarNotificacion("Eliga una tribuna.", "error");
    }
  });
    // Restaurar el estado según la selección confirmada
    let seleccionConfirmada = localStorage.getItem('seleccionConfirmada');
    if (seleccionConfirmada === "true") {
        seccionActual = "cantidadEntradas";

        // Ocultar las secciones que no deben mostrarse
        
        document.getElementById("subtitulo").style.display = "none";
        document.getElementById("contenedor").style.display = "none";
        document.getElementById("botonConfirmar").style.display = "none";
        document.getElementById("seleccionado").style.display = "block";
        document.getElementById("botonesCantidad").style.display = "block";
        document.getElementById("atras").style.display = "block";

        // Desplazar hacia la sección de las entradas
        document.getElementById("botonesCantidad").scrollIntoView();
    }

  

  // Botones para aumentar y disminuir la cantidad de entradas
  document.getElementById("sumaEntrada").addEventListener("click", function() {
    if (cantidadEntradas < maximoEntradas) {
      cantidadEntradas++;
      actualizarTotal();
    }
  });

  document.getElementById("restaEntrada").addEventListener("click", function() {
    if (cantidadEntradas > 1) {
      cantidadEntradas--;
      actualizarTotal();
    }
  });

  // Boton para confirmar el precio final
  document.getElementById("confirmarPrecio").addEventListener("click", function() {
    document.getElementById("titulo").style.display = "none";
    document.getElementById("seleccionado").style.display = "none";
    document.getElementById("botonesCantidad").style.display = "none";
    document.getElementById("subtituloCorreo").style.display = "block";
    document.getElementById("email").style.display = "block";
    document.getElementById("enviarCorreo").style.display = "block";
  });

  // Boton para ir atrás
  document.getElementById("atras").addEventListener("click", function() {
    document.getElementById("titulo").textContent = "Partido";
    document.getElementById("subtitulo").style.display = "block";
    document.getElementById("contenedor").style.display = "block";
    document.getElementById("botonConfirmar").style.display = "block";
    document.getElementById("seleccionado").style.display = "none";
    document.getElementById("botonesCantidad").style.display = "none";
  });

  // Boton para enviar correo electrónico y mostrar tarjeta de confirmación
document.getElementById("enviarCorreo").addEventListener("click", function() {
    let email = document.getElementById("email").value;
    if (isValidEmail(email)) {
      if (!emailAlreadyUsed(email)) {
        mostrarTarjeta(email);
      } else {
        mostrarNotificacion("Este correo electrónico ya ha sido utilizado.", "error");
      }
    } else {
      mostrarNotificacion("Ingrese un correo válido.", "error");
    }
  });

  // Funcion para mostrar la tarjeta de confirmación
  function mostrarTarjeta(email) {
    document.getElementById("subtituloCorreo").style.display = "none";
    document.getElementById("email").style.display = "none";
    document.getElementById("enviarCorreo").style.display = "none";

     // Establecer seleccionConfirmada en true
     localStorage.setItem('seleccionConfirmada', 'true');

    // Mostrar la tarjeta
    let tarjeta = document.getElementById("tarjeta");
    tarjeta.style.display = "block";

    // Actualizar contenido de la tarjeta
    document.getElementById("tribuna").textContent = " " + document.getElementById("seleccionado").textContent;
    document.getElementById("cantidadTotal").textContent = "Cantidad de entradas: " + cantidadEntradas + " (Total: $" + (precioEntrada * cantidadEntradas) + ")";
    document.getElementById("emailContacto").textContent = "Correo electrónico de contacto: " + email;

    // Agregar un botón para limpiar el localStorage
    let botonLimpiarLocalStorage = document.createElement("button");
    botonLimpiarLocalStorage.textContent = "Finalizar Reserva";
    botonLimpiarLocalStorage.addEventListener("click", function() {
      limpiarLocalStorage();
      window.location.href = "#"; // Redirigir al usuario al inicio de la pagina
    });
    tarjeta.appendChild(botonLimpiarLocalStorage);
  }
}



 
 
        
    



    
    
    
    
   
       

    
      

   



 
