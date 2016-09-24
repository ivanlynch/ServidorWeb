// Hago require del protocolo http
var http = require('http'),
	router = require('./router.js'),
	rutas = require('./rutas.js'),
	urls = require('url');

//Declaro el servidor web
http.createServer(function(request, response){

	//Obtenemos la url y convertimos en un objeto
	url = urls.parse(request.url).pathname;
	console.log(url);

	//Ejecutamos la funcion router
	router.router(rutas.rutas, url, response);

//El servidor esta escuchando en el puerto 3000	
}).listen(3000, '192.168.0.22', function(){
	console.log('Server is running');
});