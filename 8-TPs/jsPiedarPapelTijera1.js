/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
/*Piedra 1, papel 2, tijera 3*/


var eleccionMaquina;
function comenzar()
{
	
	eleccionMaquina = Math.floor(Math.random()*(4-1)+1);
switch(eleccionMaquina)
		{
			case 1:
				eleccionMaquina="piedra";
				break;
			case 2:
				eleccionMaquina="papel";
				break;
			case 3:
				eleccionMaquina="tijera";
				break;

		}
	

}//FIN DE LA FUNCIÓN
function piedra()
{
	if(eleccionMaquina == "piedra")
	{
		alert("Empató");
	}
	else if(eleccionMaquina == "papel")
	{
		alert("Perdió");
	}
	else
	{
		alert("Gano.");
	}

	alert("La maquina eligio "+eleccionMaquina);
comenzar()

}//FIN DE LA FUNCIÓN

function papel()
{
if(eleccionMaquina == "papel")
	{
		alert("Empató");
	}
	else if(eleccionMaquina == "tijera")
	{
		alert("Perdió");
	}
	else
	{
		alert("Gano.");
	}
alert("La maquina eligio "+eleccionMaquina);

comenzar()
}//FIN DE LA FUNCIÓN
function tijera()
{
	if(eleccionMaquina == "tijera")
	{
		alert("Empató");
	}
	else if(eleccionMaquina == "piedra")
	{
		alert("Perdió");
	}
	else
	{
		alert("Gano.");
	}
	alert("La maquina eligio "+eleccionMaquina);
comenzar()
}//FIN DE LA FUNCIÓN