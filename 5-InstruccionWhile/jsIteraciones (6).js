function Mostrar()
{
//var numerouno
//var numerodos
//var numerotres
//var numerocuatro
//var numerocinco
var numero 
var contador = 0
var acumulador = 0
while (contador != 5){
       
       numero = prompt("ingrese un numero");
       if (numero = parseInt(numero)) {
       
          acumulador = acumulador + numero   

           contador = contador +1;



       }
      
      else{  


      	alert("ingrese un numero")
      	
       


        }
	
}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN