/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var a;
	var b;

	a = document.getElementById("numeroDividendo").value;
	a = parseInt(a);
	b = document.getElementById("numeroDivisor").value;
	b = parseInt(b);
	if(b == 0) {
		alert("No se divide por 0.");
	}
	else {
		alert("El resto es: "+(a % b))
		
	}
	
}
