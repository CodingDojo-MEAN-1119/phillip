const express = require('express');
const app = express();
app.use(express.static(__dirname + "/static"));
const server = app.listen(1337);
const io = require('socket.io')(server);
app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');
app.use(express.urlencoded({extended: true}));
var counter = 0;
    
io.on('connection', function (socket) { //2


  io.sockets.on('connection', function (socket){
		//server listens to "posting_form" event
	 	socket.on("posting_form", function (data){
	 		//generate a random number
	 		var random_number = Math.floor((Math.random() * 1000) + 1);
		  //will emit the data to the client
		  socket.emit('updated_message', {response: data}); 
			socket.emit('random_number', {response: random_number}); 
		})
	})
    
});

app.get('/', (req,resp)=>{
  resp.render('index')
});

