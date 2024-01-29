/* buenas no pude crear funciones creadas por mi por falta de tiempo y de practica, dejo la idea del trabajo que creo que cumple con su proposito, en el tercer prompt mi idea seria si 
toca en cancelar o que se cancele el pedido o que regrese para atras, no pude hacerlo y por ende toques lo que toques te va a obligar a poner un numero de los solicitados, tambien 
optaria por mostrar un mejor menu con los precios pero bueno, pude hacerlo de esa manera, la idea seria mejorarlo mucho mas y simplificarlo pero por cuestiones de tiempo pude presentar
esto */

const Tsivori = [ "Sivori", 9500, 18000, 13000];

const Tcentenario = ["Centenario", 9000, 17000, 12000];

const Tquintero = ["Quintero", 18000, 28000, 21000];

const Tbelgrano = ["Belgrano", 20000, 30000, 23000];

const Lugar = ["Tribuna", "Baja" ,"Media",  "Alta"];

const Tribunas = ["Sivori", "Centenario", "Quintero", "Belgrano"];

let Totalentradas= 0;

let ValorFinal = 0;

let alerta= 0;

let alerta2= 0;

let alerta3= 0;

let cantidad= 0;

let NomUsuario = prompt("Ingrese su nombre");

function Cancelar(){
    alert ("Operacion cancelada")
}
function PrecioFinal (){
      return ValorFinal*cantidad
}


if (NomUsuario == null || NomUsuario == "") {
    alert ("No ingreso ningún nombre");
} else {
    alert ("Bienvenido " + NomUsuario + " a continuacion la lista de precios " );
        for(let i=0;i<Tribunas.length-1;i++){
            alert (Tribunas[0]+ " "+Lugar[i+1] +" $"+Tsivori[i+1]+"\n"+Tribunas[1]+ " "+Lugar[i+1]+ " $"+Tcentenario[i+1]+ " "+"\n"+Tribunas[2]+ " "+Lugar[i+1]+ " $"+Tquintero[i+1]+ " "+"\n"+Tribunas[3]+ " "+Lugar[i+1]+ " $" +Tbelgrano[i+1])
        }
            while (alerta !== "Sivori" || alerta !== "Centenario" || alerta !== "Quintero" || alerta !== "Belgrano"){
            let SectorSeleccionado= prompt ("Elija sector Sivori, Centenario, Quintero, Belgrano."+"\n"+ "Respetando las mayusculas."+"\n"+"Cancelar desestima la compra")
            if (SectorSeleccionado == null){
            Cancelar();
            break
                } else {
                     alerta=SectorSeleccionado
                     for ( let j = 0; j < Tribunas.length; j++)
                    if (SectorSeleccionado == Tribunas[j]){
                             while(alerta2 !== "1" || alerta2!== "2"|| alerta2!=="3"){    
                             let  TribunaSeleccionada = prompt ("Escoja la tribuna a traves del numero correspondiente "+"\n"+"1=Baja"+"\n"+"2=Media"+"\n"+"3=Alta")     
                              alerta2=TribunaSeleccionada
                                if (SectorSeleccionado == Tsivori[0] ){
                                        ValorFinal=Tsivori[TribunaSeleccionada];
                                }
                                if (SectorSeleccionado == Tcentenario[0]){

                                    ValorFinal=Tcentenario[TribunaSeleccionada]
                                }
                                     
                                if (SectorSeleccionado == Tquintero[0]) {
                                    ValorFinal=Tquintero[TribunaSeleccionada]
                                }           
                                if (SectorSeleccionado == Tbelgrano[0]){
                                    ValorFinal=Tbelgrano[TribunaSeleccionada]
                                }
                            if(alerta2 === "1" || alerta2=== "2"|| alerta2==="3"){
                                break;
                            }
                            }
                    } 
                    if(alerta=== "Sivori" || alerta === "Centenario" || alerta === "Quintero" || alerta === "Belgrano"){
                        break;
                    } 
                        }
            
                            }
                                if (ValorFinal>0){
                                    alert ("El precio de la entrada es de $" + ValorFinal);
                                    const respuesta = confirm ("Desea continuar?")
                                    if (respuesta){
                                         while (alerta3 !== "1"||alerta3 !== "2" || alerta3 !== "3"|| alerta3 !== "4"){
                                        let Totalentradas = prompt ("Seleccione numericamente el total de entradas maximo 4")
                                        alerta3=Totalentradas 
                                             if(alerta3=== "1"|| alerta3=== "2"|| alerta3=== "3"||alerta3==="4"){
                                             cantidad=Totalentradas
                                             break;
                                            }       
                                        }
                                    alert ("El precio final es de $" + PrecioFinal()) 
                                console.log (ValorFinal*cantidad)}
                                    else {
                                        Cancelar() }
                                    }
        }
                                
               
     

        
    



    
    
    
    
   
       

    
      

   



 
