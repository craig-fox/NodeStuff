/**
 * Created by CraigFox on 3/02/14.
 */
var http = require('http');
var server = http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
res.end('<h1>Hello Mercury!</h1>');
});

server.listen(3000);
console.log('Server running at http://localhost:3000');
