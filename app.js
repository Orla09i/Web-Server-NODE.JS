const http = require('http');

http.createServer((req, resp) => {

        resp.writeHead(200, { 'content-Type': 'application/json' });
        //resp.write('Hola Mundo');

        let salida = {
            nombre: 'Orlando',
            edad: 26,
            url: req.url
        }

        resp.write(JSON.stringify(salida));
        resp.end();

    })
    .listen(8080);
console.log('Escuchando el puerto 8080');