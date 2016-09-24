// Hago require del protocolo http
var http = require('http'),
	urls = require('url');

//Declaro el servidor web
http.createServer(function(request, response){

	//Obtenemos la url y convertimos en un objeto
	url = urls.parse(request.url).pathname;
	console.log(url);

	//Ejecutamos la funcion router
	router(rutas, url, response);

//El servidor esta escuchando en el puerto 3000	
}).listen(3000, '192.168.0.22', function(){
	console.log('Server is running');
});

//Declaramos la funcion router
function router(rutas, url, response){
	//si lo que devuelve la url es una funcion
	if(typeof rutas[url] === 'function'){

		//Hacemos el ruteo a esa funcion
		return rutas[url](response);
	}else{
		response.writeHead(404, {'Content-type': 'text/html'});
		response.write('<h1>Error 404 pagina no encontrada</h1>');
		response.end();
	}
}

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