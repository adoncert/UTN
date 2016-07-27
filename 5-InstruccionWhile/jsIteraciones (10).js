function Mostrar()
{
  var nun
  var sumaneg = 0
  var sumapos = 0
  var canpos = 0
  var canneg = 0
  var cantceros = 0
  var cantpares = 0
  var prompos
  var promneg
  var diferencia
  
  // leer num "prompt"
	
  nun = prompt("ingrese numero");
  while(nun!="fin")
  {  
    if(nun > 0)
	{ 
		canpos =canpos +1
		sumapos = parseInt(sumapos) + parseInt(nun )
	}
	else
	{
		if(nun==0)
		{
		 cantceros+= 1	
			
		}
		else
		{
			canneg+= 1
			sumaneg+= parseInt(nun)
		}
		
	}
		
		if(nun%2==0)
		
		{
			cantpares += 1
			
		}

     

	nun = prompt("ingrese numero");
  }
   prompos= sumapos/canpos
   promneg= sumaneg/canneg
   diferencia = canpos - canneg
   
    document.write("el promedio de positivos es"+prompos)
    document.write("<br>el promedio de negativos"+promneg)
    document.write ("<br>la diferencia entre negativos y positivos"+diferencia)
    document.write("<br>sumapos"+sumapos)
    document.write("<br>canpos"+ canpos)
    document.write("<br>cantidad de numeros pares"+cantpares)
    document.write("<br>cantidad de ceros"+cantceros)
   
   

}//FIN DE LA FUNCIÓN