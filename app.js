var restify = require('restify');

function respond(req, res, next) {
  res.send('I\'m a Restify server. Hello ' + req.params.name);
  next();
}

var server = restify.createServer({
	name: 'Simple Restify Server'
});
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(8080, function() {
  console.log('%s app listening at %s', server.name, server.url);
});