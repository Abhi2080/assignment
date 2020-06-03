const mongoose = require("mongoose");


const jombotronSchema = new mongoose.Schema({
    text:{
        type : String,
        required : true
    }
  });


const JombotronText = mongoose.model("JobotronText",jombotronSchema);
let item = new JombotronText({
    text:"This is a modified jumbotron that occupies the entire horizontal space of its parent.",
    });
    item.save();

module.exports = JombotronText;