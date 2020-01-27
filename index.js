const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");


const user = require("./model/user");

const app = express();
app.listen(7000);


//app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({extended:false}));

app.get("/user/:id", function(req,res){

    try {
        //console.log(req.params.id);
        user.getUser(req.params.id,function(err,data){
            if(err){
                throw err;
            }else{
                res.send(data);
            }
        })
        
    } catch (error) {
        res.send(500).send(error);
    }

});

app.post("/user", function(req,res){

    try {

        user.insertUser(req.body, function(err,data){

            if(err){
                throw err;
            }else{

                user.getUser(data.insertId,function(err,data){
            if(err){
                throw err;
            }else{
                res.send(data);
            }
        })
            }
        });
        
    } catch (error) {
        res.status(500).send(error);
    }

});

app.put("/user/:id", function(req,res){
    try {
        user.updateUser(req.params.id,req.body,function(err,data){
            
            if(err){
                throw err;
            }else{
                user.getUser(req.params.id,function(err,data){
                    if(err){
                        throw err;
                    }else{
                        res.send(data);
                    }
                })
            }

        });
        
    } catch (error) {
        res.send(500).send(error);
    }
});


app.delete("/user/:id", function(req,res){

    try {
        user.deleteUser(req.params.id,function(err,data){
            
            if(err){
                throw err;
            }else{
               res.send(data);
            }

        });
        
    } catch (error) {
        res.send(500).send(error);
    }

});



