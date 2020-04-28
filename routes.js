const express = require('express');
const ejsLint = require('ejs-lint');
const app = express();
const mongoose = require("mongoose");
const {mongourl} = require('./config/keys');

const Wish = mongoose.model("wishes");  //require nai karvanu ee aapde app.js ma kari nakhyu. chhele app.js ma j bathu jase etle pela require run thase.


mongoose.connect(mongourl,{useNewUrlParser:true,useUnifiedTopology: true });

module.exports = (app)=>{
//get routes
 app.get('/data',(req,res)=>{
    Wish.find({}).then(data=>{
        console.log(data)
        //res.render('home',{wish:data})
        res.send(data);

    })
})

app.get('/about',(req,res)=>{
    res.render('about')
})   
//post routes
app.post('/sent',(req,res)=>{
    const Item = new Wish({
        wish:req.body.item
    });
    Item.save().then(data=>{
        console.log("saved")
        res.send(data)
    }).catch(err=>{
        throw err;
    })
  
})

//delete routes

app.delete('/remove/:id',(req,res)=>{

    Wish.findOneAndRemove({_id:req.params.id}).then(data=>{
        console.log("deleted")
        res.send(data)
    })
   
})



}

