var express = require('express');
var app = express();

//app.configure(function(){
  app.use('/apps', express.static(__dirname + '/apps'));
  //app.use(express.static(__dirname + '/public'));
//});

//Sorry, I have to do this.
app.get('/', function(req, res) {
  res.send('Hahaha!');
})

//a snapshot of the successful request form the bench.
app.get('/oauth/token', function(req, res) {
  res.write('eyJ0eXAiOiJKV1QiLA0KICJhbGciOiJIUzI1NiJ9.ew0KICAiYWNjZXNzX3Rva2VuIjoiZjEyZjk3YTUtMGMxNi00MGMyLWE5N2YtNGI5NDdhYjRkMTU3IiwNCiAgInRva2VuX3R5cGUiOiJCZWFyZXIiLA0KICAiZXhwaXJlc19pbiI6IjE4MDAiLA0KICAic2NvcGUiOiIiDQogfQ.ZZ1cxMbKjl0GJrVJJ9Fjzps2phjCNJotoTaW-VoyqD0');
  res.end();
})

//whatever user set for their app to appear
app.get('/json/api/available', function(req, res) {
  res.json(JSON.parse(FS.readFileSync("applicationResponse.json", "utf8")));
})

app.listen(80);