/*  */

var contador = 0;
let final= 0;
var contadorValido = false; 

let tribunas = document.getElementById("Tribunasprecio")

const Tribuna= [
    {id: "Sivori", seccion: "Alta", precio: 9500},
    {id: "Sivori", seccion: "Media", precio: 18000},
    {id: "Sivori", seccion: "Baja", precio: 13000},
    
    {id: "Centenario", seccion: "Alta", precio: 9000},
    {id: "Centenario", seccion: "Media", precio: 17000},
    {id: "Centenario", seccion: "Baja", precio: 12000},

    {id: "Quintero", seccion: "Alta", precio: 18000},
    {id: "Quintero", seccion: "Media", precio: 28000},
    {id: "Quintero", seccion: "Baja", precio: 21000},

    {id: "Belgrano", seccion: "Alta", precio: 20000},
    {id: "Belgrano", seccion: "Media", precio: 30000},
    {id: "Belgrano", seccion: "Baja", precio: 23000},
    ]
    Tribuna.forEach((producto)=>{
        let contenedor = document.createElement("div")
        contenedor.className = "card"
        contenedor.innerHTML = `<h3>${producto.id+ " " + producto.seccion+ " $" + producto.precio}<h3> `
        tribunas.appendChild(contenedor);
})

function mostrarSeleccion() {
    let seleccion1 = document.getElementById("menuTribuna").value;
    let seleccion2 = document.getElementById("menuSector").value;
    document.getElementById("resultado").textContent = "Usted selecciono: " + seleccion1 + " " + seleccion2;
    
        let tribunafinal = seleccion1
        const filtrados = Tribuna.filter((Tribu)=> Tribu.id == tribunafinal)

        let sectorfinal = seleccion2
        const busqueda = filtrados.find((filtrado) => filtrado.seccion == sectorfinal)
        final=busqueda.precio

  if (!contadorValido) {
    contador++;
    actualizarContador();
}
document.getElementById("botones").style.display = "block";

document.getElementById("botonConfirmar2").style.display = "block";

if (contador >= 4) {
    document.getElementById("botonConfirmar").disabled = true;
}
}
function actualizarContador() {
    document.getElementById("contador").textContent = "Cantidad de entradas (maximo 4): " + contador;
   
}
function sumar() {
    if (contador < 4) {
        contador++;
        actualizarContador();
    }
}
function restar() {
    if (contador >1) {
        contador--;
        actualizarContador();
        document.getElementById("botonConfirmar").disabled = false;
    }
}
function confirmarSeleccionFinal() {
    multiplicar();
}

    
function crearMenu() {
    let contenedor = document.createElement("div");

    // 1
    let selectMenu1 = document.createElement("label");
    selectMenu1.textContent = "Seleccione una Tribuna:  ";
    contenedor.appendChild(selectMenu1);

    let select1 = document.createElement("select");
    select1.id = "menuTribuna";
    contenedor.appendChild(select1);

    let opciones1 = ["Sivori", "Centenario", "Belgrano", "Quintero"];
    opciones1.forEach(function(opcion) {
        let option = document.createElement("option");
        option.value = opcion;
        option.textContent = opcion;
        select1.appendChild(option);
    });
   

    // 2
    let selectMenu2 = document.createElement("label");
    selectMenu2.textContent = "Selecciona un sector :";
    contenedor.appendChild(selectMenu2);

    let select2 = document.createElement("select");
    select2.id = "menuSector";
    contenedor.appendChild(select2);

    let opciones2 = ["Alta", "Media", "Baja"];
    opciones2.forEach(function(opcion) {
        let option = document.createElement("option");
        option.value = opcion;
        option.textContent = opcion;
        select2.appendChild(option);
    });



    let botonConfirmar = document.createElement("button");
    botonConfirmar.textContent = "Confirmar";
    botonConfirmar.id = "botonConfirmar";
    botonConfirmar.addEventListener("click", function() {
        mostrarSeleccion();
        contadorValido = true;
    });
    contenedor.appendChild(botonConfirmar);

    let contadorDiv = document.createElement("div");
    contadorDiv.id = "contador";
    contenedor.appendChild(contadorDiv);

    let botonesDiv = document.createElement("div");
    botonesDiv.id = "botones";
    botonesDiv.style.display = "none";

    let botonSumar = document.createElement("button");
    botonSumar.textContent = "+";
    botonSumar.addEventListener("click", sumar);
    botonesDiv.appendChild(botonSumar);

    let botonRestar = document.createElement("button");
    botonRestar.textContent = "-";
    botonRestar.addEventListener("click", restar);
    botonesDiv.appendChild(botonRestar);

    

    contenedor.appendChild(botonesDiv);

    let botonConfirmarFinal = document.createElement("button");
    botonConfirmarFinal.id = "botonConfirmar2";
    botonConfirmarFinal.textContent = "Confirmar";
    botonConfirmarFinal.style.display = "none";
    botonConfirmarFinal.addEventListener("click", confirmarSeleccionFinal);
    contenedor.appendChild(botonConfirmarFinal);


    document.body.appendChild(contenedor);
}

crearMenu();

 function multiplicar(){
    mostrarSeleccion()
    final= final*contador
    console.log(final)
    document.getElementById("finalprecio").textContent = "Precio final= $" + final

}







               
     

        
    



    
    
    
    
   
       

    
      

   



 
