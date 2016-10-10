function palindromo (cadena){ // Función
	var palabra = prompt ('Escribe una palabra'); // Usuario introduce palindromo
	var nuevaCadena = cadena.toLowerCase(); // Se pasa a minúsculas
	var letrasOrdenadas = nuevaCadena.split (""); //Se corta
	var letrasalReves = nuevaCadena.split ("") .reverse(); //Se voltea 
	var cadenasIguales;
	if (letrasOrdenadas == letrasalReves) { //Comparación
		return true;
	}else{
	 	return false;
	}
}
console.log ('Palindromo');
console.log ('No es un palindromo');
