/*  */


var array= ["a"]

const opcion = document.querySelectorAll( ".Tribuna");

opcion.forEach(e => {
    e.addEventListener("click", function(e){
        const padre = e.target.parentNode;
        padre.children[1].classList.toggle("animation");
        padre.parentNode.children[1].classList.toggle("animation");
    });
})

function obtenerValor(elemento) {
    let valorSeleccionado = elemento.textContent;
    document.getElementById('valorSeleccionado').textContent = valorSeleccionado;
    console.log(valorSeleccionado);
    array[0]=valorSeleccionado;

    }
    
 
  function seleccionarOpcion(opcion) {
    opcionSeleccionada = opcion; 
    document.getElementById('opcionSeleccionada').textContent = opcionSeleccionada;
    console.log(opcionSeleccionada)
  }


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
console.log(array[0])

let Totalentradas= 0;

let ValorFinal = 0;

let alerta= 0;

let alerta2= 0;

let alerta3= 0;

let cantidad= 0;


function Cancelar(){
    alert ("Operacion cancelada")
}
function PrecioFinal (){
      return ValorFinal*cantidad
}


               
     

        
    



    
    
    
    
   
       

    
      

   



 
