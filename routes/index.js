//all routes go below (Inside of module.exports block)
module.exports = function (app) {
  app.get('/', function(req,res){
    res.render("index");
  });

  app.get('/new_message', function(req, res){
    res.render("new_message");
  });

  app.get('*', function(req, res){
    notFound(res);
  });
};

function notFound(res) {
  res.send('<h1>Page not found.</h1>', 404);
}