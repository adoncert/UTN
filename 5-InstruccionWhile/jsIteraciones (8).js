function Mostrar()
{
	var numero;
	var suma = 0
	var multiplicacion = 1
	var respuesta;

	while(numero != "no")
	{
		numero = prompt("Ingrese un numero:");
		if(numero > 0){

			suma = suma + parseInt(numero)
			

			}	

		else
		{
			if(numero < 0){



			multiplicacion = multiplicacion * numero 

			 }
			
		}
	}

	document.getElementById("suma").value = suma
	document.getElementById("producto").value = multiplicacion








}//FIN DE LA FUNCIÓN