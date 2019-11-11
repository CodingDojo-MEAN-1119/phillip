const controller = require('../../controllers/task.controller')

    module.exports=function(app){
        app.get('/', (req,resp)=>{
            controller.index(req,resp);
        });
    
        app.post('/', (req,resp)=>{
            // console.log(req.body);
            controller.create(req,resp);
        });
    
        app.get('/:id',(req,resp)=>{
           controller.show(req,resp);
        });
    
        app.put('/:id', (req,resp)=>{
            controller.update(req,resp);
        });

        app.delete('/:id', (req,resp)=>{
            controller.destroy(req,resp);
        });
    
    
    }