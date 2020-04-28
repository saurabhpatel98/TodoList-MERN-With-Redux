const express = require('express');
const app = express();

const port = process.env.PORT || 5000
const bodyParser = require('body-parser')
//const cors=require('cors')
//serving static files
app.use(express.static('public'))

// ./ = current directory 
//  ../ = aani ek pachal ni directort
//  ../../ current ni pachal eeni pachal eeni pachal ni directory ma vai jase.

require('./models/wish')  //model ne export kariye tyare je error aave ke multiple modile ecport na kari sakiye to ee solve karva
//app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

require('./routes')(app);

//app.set('view engine','ejs');
//In Case of Production
app.use(express.static('ReactDemo/build'))
const path = require('path');
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'ReactDemo','build','index.html'));
})

// import routes



app.listen(port,()=>{
    console.log("server is running on port" + port)
})

