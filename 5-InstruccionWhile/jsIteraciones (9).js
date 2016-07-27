function Mostrar()
{//inicio
	var numero;
	var max =-1000000
	var min = 10000000
	numero = prompt("ingreso numero");
	//proceso
	
	while(numero !=0 )
	{ 
		if(numero > max)
		{
			max = numero ;	
		}
		if( numero < min)
		{
			min = numero			
		}
		numero = prompt("ingreso numero");	

	}
	
	//final
	alert("el max es" + max + "min"+ min);
	
}//FIN DE LA FUNCIÓN
	
