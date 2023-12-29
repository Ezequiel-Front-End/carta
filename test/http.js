const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => { 
    if(req.url == '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('Rodando');
    }
});


server.listen(port, () => console.log('Servidor Rodando com Sucesso!'));