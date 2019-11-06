const controller = require('../controllers/controller.js');


module.exports=function(app){
    app.get('/', (req,resp)=>{
        controller.findAll(req,resp);
    });

    app.get('/cats/new', (req,resp)=>{
        resp.render('add')
    });

    app.post('/cats',(req,resp)=>{
       controller.create(req,resp);
    });

    app.get('/cats/:id', (req,resp)=>{
        controller.display(req,resp);
    });

    app.get('/cats/edit/:id', (req,resp)=>{
        controller.showEdit(req,resp);
    });

    app.post('/cats/:id', (req,resp)=>{
        controller.processEdit(req,resp);
    });
    
    app.get('/cats/destroy/:id', (req,resp)=>{
        controller.delete(req,resp);
    });


}