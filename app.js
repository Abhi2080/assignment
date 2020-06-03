const express = require("express");
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const headerRouter = require('./routes/headerRoutes')
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 1) GLOBAL MIDDLEWARES
// Serving static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());



app.use(cookieParser());


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
let status = "false";
let content = "";
app.set('view engine', 'ejs');
mongoose.connect("mongodb://localhost:27017/jombotronDB",{useNewUrlParser: true, useUnifiedTopology: true});

app.use('/', headerRouter);

// let item = new JombotronText({
// text:"This is a modified jumbotron that occupies the entire horizontal space of its parent.",
// });
// item.save();

// app.get("/",function(req,res)
// {
//     JombotronText.find({},function(err,results)
//     {
//         content = item.text;
//         res.render("index",{what:status,data:content});
//     })
    
// });

// app.post("/",function(req,res)
// {
//     status = "true";
//     res.redirect("/");
// });

// app.post("/submit",function(req,res)
// {
 /* JombotronText.updateOne({},{text:req.body},function(err)
{
  if(err)
  {
    console.log(err);
  }
  else{
    console.log("successfully updated");
    console.log(req.body);
  }
});*/
//     res.render("submit.ejs");
// });

app.listen(3000,function(){
    console.log("server started on port 3000");
});