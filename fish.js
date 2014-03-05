/**
 * Created by CraigFox on 12/02/14.
 */
var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type': 'video/mp4'});
    fs.createReadStream('./vid/fishglass.mp4').pipe(res);
});

server.listen(3000);
console.log('Server running at http://localhost:3000/');