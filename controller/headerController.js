const header = require('./../models/headerModel');


exports.changeHeader = async function(req, res, next ){
    status = "true";
    res.redirect("/");
}

exports.submitHeader = async function(req,res,next){
    res.render("submit.ejs");
}