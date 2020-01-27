const mysql = require("mysql");

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "root",
    database : "springdata"
});

db.connect(function(err){
    if(err){
        
        console.log(err);
    }else{
        console.log("connected to database springdata");
    }
});

exports.getUser = function(id,callback){
    let sql = 'SELECT  * from person where id = ?';
    console.log(id);
    db.query(sql,[id], function(err,data){

        if(err){
            callback(err);
        }else{
            callback(null,data);
        }
    });

}

exports.insertUser = function(data,callback){

    let sql =" insert into person set ?";

    db.query(sql,[data], function(err,data){
        if(err){
            callback(err);
        }else{
            callback(null,data);
        }
    })
}

exports.updateUser = function(id,data,callback){

    let sql = "update person set ? where id = ?";

    db.query(sql,[data,id],function(err,data){
        if(err){
            callback(err);
        }else{
            callback(null,data);
        }
    })

}

exports.deleteUser = function(id,callback){

    let sql = "delete from person where id = ?";

    db.query(sql,[id], function(err,data){
        if(err){
            callback(err);
        }else{
            callback(null,data);
        }
    })
}