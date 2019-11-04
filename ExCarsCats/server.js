const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');
app.use(express.urlencoded({extended: true}));


app.get('/', (request, response)=>{
    response.render("index");
});
app.get('/cars', (request, response)=>{
    response.render("cars");
});
app.get('/cats', (request, response)=>{
    response.render("cats");
});
app.get('/cats/shorthaired', (request, response)=>{

    var cat_data={
        img: "/img/cats/shorthaired.jpg",
        name: "Short Haired Cat",
        f_food: "Mice",
        f_sleep: ["Shorty Hole", "Under The Stairs", "On Your Favorite Socks"]
    };
    response.render("cats-show",{cat_data:cat_data});
});
app.get('/cats/tabby', (request, response)=>{

    var cat_data={
        img: "/img/cats/tabby.jpg",
        name: "Tabby Cat",
        f_food: "Salmon",
        f_sleep: ["Tabby Hole", "Under The House", "On Your Favorite Pillow"]
    };
    response.render("cats-show", {cat_data:cat_data});
});
app.get('/cars-new', (request, response)=>{
    response.render("cars-new");
});


app.listen(8000, ()=>{
    console.log("Listening on port 8000.")
});
app.use(express.static(__dirname + "/static"));
