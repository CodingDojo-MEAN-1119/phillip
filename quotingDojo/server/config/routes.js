const controller = require('../controllers/controller.js')


module.exports = function(app){


    app.get('/', (req,resp)=>{
        resp.render('index');
    });

    app.get('/quotes', (req,resp)=>{
        controller.findAll(req,resp);
    });

    app.post('/newQuotes',(req,resp)=>{
        controller.create(req,resp);
    });
        


}
