//Ejercicio 4
//Definir la siguiente jerarquía de objetos, haciendo uso de los prototipos de JavaScript:
//Objeto Persona con las propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona. 
//Objeto Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(). 
//Objeto Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar().
//Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía.

function persona (nombre,edad, género, metodoDetalles){
	this.nombre = nombre;
	this.edad = edad;
	this.género = género; 
	this.metodoDetalles = metodoDetalles;
	this.getmetodoDetalles = function (){
	return metodoDetalles;
	}
}

function estudiante (curso,grupo, metodoRegistro){
	this.curso = curso;
	this.grupo = grupo;
	this.metodoRegistro = metodoRegistro;
	this.getmetodoRegistro = function (){
	return metodoRegistro;
	}
}

function profesor (asignatura,nivel, metodoAsignar){
	this.asignatura = asignatura;
	this.nivel = nivel;
	this.metodoAsignar = metodoAsignar;
	this.getmetodoAsignar = function (){
	return metodoAsignar;
	}
}

