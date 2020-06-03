const header = require('./../models/headerModel');

exports.viewHeader = function(req, res, next){
//          let item = new header({
//          text:"This is a modified jumbotron that occupies the entire horizontal space of its parent.",
//          });
// item.save();
    header.find({},function(err,results)
    {
        // content = item.text;
        content = 'ABHINAV';
        let status = "false";
        res.render("index",{what:status,data:content});
    })
    
}