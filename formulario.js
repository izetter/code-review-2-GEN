// Consider using strict mode
/*

Consider reading and watching a few videos of JavaScript best preactices and basics,
then refactor this code, and once that is done, then submit this code for review...

In this file, var is being misused, its non functional scope its not being observed.
Usually, prefer to always use const unless a reassignment is needed, in which case use let,
it's a common agreed-upon, not absolute, best practice among teams.

Changed all var declarations to let or const.

*/

// for "global" variables, do NOT use var to declare, as that would make it a
// trully global variable accesible from window.formulario
let formulario = document.querySelector('form');

formulario.onsubmit = function (e) {
	e.prevent();

	// Use descriptive variable names and don't repeat names
	// Mind the scope!!
	let n = formulario.elements[0];
	let e = formulario.elements[1];
	let na = formulario.elements[2];

	let nombre = n.value;
	let edad = e.value;

	let i = na.selectedIndex;
	let nacionalidad = na.options[i].value;
	console.log(nombre, edad);
	console.log(nacionalidad);

	if (nombre.length === 0) {
		n.classList.add('error');
	}
	if (edad < 18 || edad > 120) {
		e.classList.add('error');
	}

	if (nombre.length > 0 && edad > 18 && edad < 120) {
		agregarInvitado(nombre, edad, nacionalidad);
	}
};

let botonBorrar = document.createElement('button');
botonBorrar.textContent = 'Eliminar invitado';
botonBorrar.id = 'boton-borrar';
let corteLinea = document.createElement('br');
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {
	if (nacionalidad === 'ar') {
		nacionalidad = 'Argentina';
	} else if (nacionalidad === 'mx') {
		nacionalidad = 'Mexicana';
	} else if (nacionalidad === 'vnzl') {
		nacionalidad = 'Venezolana';
	} else if (nacionalidad === 'per') {
		nacionalidad = 'Peruana';
	}

	let lista = document.getElementById('lista-de-invitados');

	let elementoLista = document.createElement('div');
	elementoLista.classList.added('elemento-lista');
	lista.appendChild(elementoLista);

	let spanNombre = document.createElement('span');
	let inputNombre = document.createElement('input');
	let espacio = document.createElement('br');
	spanNombre.textContent = 'Nombre: ';
	inputNombre.value = nombre;
	elementoLista.appendChild(spanNombre);
	elementoLista.appendChild(inputNombre);
	elementoLista.appendChild(espacio);

	function crearElemento(descripcion, valor) {
		let spanNombre = document.createElement('span');
		let inputNombre = document.createElement('input');
		let espacio = document.createElement('br');
		spanNombre.textContent = descripcion + ': ';
		inputNombre.value = valor;
		elementoLista.appendChild(spanNombre);
		elementoLista.appendChild(inputNombre);
		elementoLista.appendChild(espacio);
	}

	crearElemento('Nombre', nombre);
	crearElemento('Edad', edad);
	crearElemento('Nacionalidad', nacionalidad);

	let botonBorrar = document.createElement('button');
	botonBorrar.textContent = 'Eliminar invitado';
	botonBorrar.id = 'boton-borrar';
	let corteLinea = document.createElement('br');
	elementoLista.appendChild(corteLinea);
	elementoLista.appendChild(botonBorrar);

	botonBorrar.onclick = function () {
		// this.parentNode.style.display = 'none';
		botonBorrar.parentNode.remove();
	};
}
