var app = require('express')();
var http = require('http').Server(app);

app.get("/", function(req, res){
	res.sendFile("index.html");
})

http.listen(3000, function(){
	console.log("Server running");
});
