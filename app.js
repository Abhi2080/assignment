const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
let status = "false";
let content = "";
app.set('view engine', 'ejs');
mongoose.connect("mongodb://localhost:27017/jombotronDB",{useNewUrlParser: true, useUnifiedTopology: true});

const jombotronSchema = new mongoose.Schema({
    text:String,
  });
  const JombotronText = mongoose.model("JobotronText",jombotronSchema);

let item = new JombotronText({
text:"This is a modified jumbotron that occupies the entire horizontal space of its parent.",
});
item.save();

app.get("/",function(req,res)
{
    JombotronText.find({},function(err,results)
    {
        content = item.text;
        res.render("index",{what:status,data:content});
    })
    
});

app.post("/",function(req,res)
{
    status = "true";
    res.redirect("/");
});

app.post("/submit",function(req,res)
{
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
    res.render("submit.ejs");
});

app.listen(3000,function(){
    console.log("server started on port 3000");
});