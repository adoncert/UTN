function Mostrar()
{
//tomo la edad  

var edad;
edad = document.getElementById("edad").value;
edad = parseInt(edad);

if(edad >= 18){
	alert("Es Mayor");
}
else{

if(edad <13){
	alert("Es niño");
}
else{
	alert("Es adolescente");
}
}
}//FIN DE LA FUNCIÓN