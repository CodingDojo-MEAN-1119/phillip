const controller = require('../../controllers/task.controller')

    module.exports=function(app){
        app.get('/tasks', (req,resp)=>{
            controller.index(req,resp);
        });
    
        app.post('/tasks', (req,resp)=>{
            controller.create(req,resp);
        });
    
        app.get('/tasks/:id',(req,resp)=>{
           controller.show(req,resp);
        });
    
        app.put('/tasks/:id', (req,resp)=>{
            controller.update(req,resp);
        });

        app.delete('/tasks/:id', (req,resp)=>{
            controller.destroy(req,resp);
        });
    
    
    }