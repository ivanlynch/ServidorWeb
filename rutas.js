//Declaramos un objeto vacio donde se van a almacenar nuestras rutas
var rutas = {};
//creamos root y main
rutas['/'] = root;
rutas['/admin'] = admin;

//Declaramos que es lo que van a hacer cuando alguien ingrese esa funcion
function root(response){
	response.writeHead(200, {'Content-type': 'text/html'});
	response.write('<h1>Bienvenidos al root</h1>');
	response.end();
}

function admin(response){
	response.writeHead(200, {'Content-type': 'text/html'});
	response.write('<h1>Bienvenidos al admin</h1>');
	response.end();
}

module.exports.rutas = rutas;