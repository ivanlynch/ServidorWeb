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

module.exports.router = router;