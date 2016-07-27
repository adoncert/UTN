function Mostrar()
{
	var numero;
	var contador = 0
	var acumulador = 0
	var respuesta;
	var promedio;

	while(respuesta != "TERMINAR")
	{
		numero = parseInt(prompt("ingrese un Numero:"));
		acumulador = acumulador + numero
		contador = contador + 1
		promedio = acumulador / contador
		respuesta = prompt("Desea Ingresar otro numero??");


	}

	document.getElementById("suma").value = acumulador
	document.getElementById("promedio").value = promedio

}//FIN DE LA FUNCIÓN