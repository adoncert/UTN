/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
//Asignación de variables
	var a;
	var b;

	a = document.getElementById("numeroUno").value;
	a = parseInt(a);
	b = document.getElementById("numeroDos").value;
	b = parseInt(b);

//Operaciones
	alert("La suma es: "+(a + b));
}

