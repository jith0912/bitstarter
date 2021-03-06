var express = require('express');
var app = express();

//Code added to read the html file

var fs = require('fs'); 
app.use(express.logger());

app.get('/', function(request, response) {
    response.send(fs.readFileSync('index.html','utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
