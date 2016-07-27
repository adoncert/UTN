/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var a;
	var b;

	a = document.getElementById("numeroUno").value;
	a = parseInt(a);
	b = document.getElementById("numeroDos").value;
	b = parseInt(b);

	alert("La suma es: "+(a + b));
	
}

function restar()
{
	var a;
	var b;

	a = document.getElementById("numeroUno").value;
	a = parseInt(a);
	b = document.getElementById("numeroDos").value;
	b = parseInt(b);

	alert("La resta es: "+(a - b));

}

function multiplicar()
{ 
	var a;
	var b;

	a = document.getElementById("numeroUno").value;
	a = parseInt(a);
	b = document.getElementById("numeroDos").value;
	b = parseInt(b);

	alert("La multiplicacion es: "+(a * b));

}

function dividir()
{
	var a;
	var b;

	a = document.getElementById("numeroUno").value;
	a = parseInt(a);
	b = document.getElementById("numeroDos").value;
	b = parseInt(b);

	alert("La division es: "+(a / b));

}

