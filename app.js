//Learn about header and footer from video(9) from EJS module
//Important revision video(9) EJS module

const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname + "/date.js");
const app=express();

var items=["Go to gym","Consume protein","Fuck some bitches"];
var works=[];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){

    let day=date.getDate();
   
    res.render("list",{kindOfDay: day, newitems: items});
    
});

app.post("/",function(req,res){
    var item= req.body.Item;

    items.push(item);
    res.redirect("/");
})

app.get("/work",function(req,res){
    res.render("fist",{Title: "Work List", newitems: works})
})

app.post("/work",function(req,res){
    var work=req.body.Work;
    works.push(work);

    res.redirect("/work");

})

app.listen(3000,function(){
    console.log("the server is at port 3000");
});