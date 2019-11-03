const http = require('http');
const fs = require('fs');
const server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);
    
    // this is how we do routing:
    if(request.url === '/') {
        fs.readFile('./views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/style.css'){
        
        fs.readFile('./css/style.css', function (errors, contents){
            response.writeHead(200, {'Content-Type':'text/css'});
            response.write(contents);
            response.end();
        });

    }
    else if(request.url === '/car-group.jpg'){
        
        fs.readFile('./img/cars/car-group.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type':'image/jpg'});
            response.write(contents);
            response.end();
        });

    }
    else if(request.url === '/red-ford.jpg'){
        
        fs.readFile('./img/cars/red-ford.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type':'image/jpg'});
            response.write(contents);
            response.end();
        });

    }
    else if(request.url === '/silver-suv.jpg'){
        
        fs.readFile('./img/cars/silver-suv.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type':'image/jpg'});
            response.write(contents);
            response.end();
        });

    }
    else if(request.url === '/shorthaired.jpg'){
        
        fs.readFile('./img/cats/shorthaired.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type':'image/jpg'});
            response.write(contents);
            response.end();
        });

    }

    else if(request.url === '/tabby.jpg'){
        
        fs.readFile('./img/cats/tabby.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type':'image/jpg'});
            response.write(contents);
            response.end();
        });

    }

    else if(request.url === '/cats'){
        
        fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });

    } else if(request.url === '/cars'){
        
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    
    } else if(request.url === '/cars/new'){
            
        fs.readFile('./views/cars-new.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
}
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");
