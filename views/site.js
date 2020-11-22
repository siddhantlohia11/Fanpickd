const exp = require("express");
const request = require("request");
const parser = require("body-parser");

const app = exp();

app.use(parser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.sendfile(__dirname + "/trial.html");
});

app.get("/about_us.html", function(req,res){
    res.sendfile(__dirname + "/about_us.html");
});  

app.get("/gallery.html", function(req,res){
    res.sendfile(__dirname + "/gallery.html");
});  


app.listen(process.env.PORT || 5000,function(){
    console.log("STARTED");
});
