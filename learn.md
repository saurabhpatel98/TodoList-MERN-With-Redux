deploy karti vakhte..

environment variable...


aapde jyare heroku ma deploy karsu aapdo project tyare aapde heroku ne eem na kahi sakiye ke heroku specific aa j port use kare ee eeni rite je port use karvo hoi ee karse.

==>to heroku ma aapde environment variable set karvo pade.
==>environment varible predefine hase heroku ma etle aapde environment variable use karsu.

##const port = process.env.PORT || 5000; 

//aama jo heroku no port avalable nai hoi to aapde je 5000 lakhyo chhe ee port use thase.

have aapde mongodb nu environment set karvu hoy to 2 file banavsu dev.js je devlopment mate use thase. and 2nd prod.js je production mate use thase.

dev.js------

module.exports ={
    mongourl:"mongodb+srv://saurabhkhunt:12345@cluster0-vdrie.mongodb.net/test?retryWrites=true&w=majority"
}


prod.js--------------

module.exports ={
    mongourl:process.env.MONGOURL
}

aa banne file ne key.js ma add kari desu jo aa app heroku ma run thase to if condition ma prod.js mathi environment variable call karavsu nai to dev.js mathi mangodb ni url fetch karavsu..

key.js---------------------------------

if(process.env.NODE_ENV==="production"){
    module.exports= require("./prod")
}else{
    module.exports= require("./dev")
}

---------------------------------------------------------------------------------------------

Now start react

node ma aapde view banavyu eema ajax thi data post get karsu to location.reload ma aakhu page reload thase.

but React ma page reload nai thai je component ma chnage thai chhe ee j component ma chnage thase.

==>aaku page reload thai ee costly chhe eena karta react ma eevu nai thai specific component j change thase.

==>React thi single page web app banse.
   --alag alag route mate alag alag files nai banavani aapde 1 j file banavani thase ee 1 j file ma logic lakhyo hase ..route pramane kyo kyo content kevi rite run thavo joiye ee lakhyu hase.etle page reload time ochho thase.

Framework(angular) : framework aapda code ne control kare ee je rite ke ee rite karvu pade

            Ex> http request karvi chhe to angular potani method aapse ee j rite karvu pade

            ==>framework ma angular aapdne kese ee rite aapde karvanu..aama aapde framework nu sambhalvu pade jyare libarary ma eevu nathi.

React (libarary)
==>aama eevu kai nathi aapde request mate axios,fetch,...xhr..etc je use karvo hoy ee use kari sakiye.

==>aama aapde kaiye ke tare aavi rite kam karvanu chhe but framework ma ultu chhe.

Dharoke JQUERY use kariye chhiye JQUERY 1 library chhe.aapde JQUERY use karvu hoy to ee use kari sakiye chhiye je use karvu hoy ee use kari sakiye.


----------------------------------------
angular,vue,Svelte etc...
--------------


import React, { Component } from 'react'
// const FunctionComponent=()=>{
//   return(<h1>coder never quit</h1>);
//   //aama render lakhvani jarur narhi padti
//   //class Component ma rander lagavu pade.

// } 

// OR
// function FComponent(props){
// return(<div><p>{props.name}={props.status}</p></div>)
// }

// OR
export default class App extends Component {

  state={
    title:"Saurabh",
    status:"Programmer",
    friend:"xyz"
  }
  changeName=(name)=>{
    this.setState({title:"Mobii",Status:name.status,friend:name})
    
  }
  render() {
    
   
    return (
      <div>
              <h1>{this.state.title}</h1>
              <h3>He is : {this.state.Status}</h3>
              <h3>He is : {this.state.friend}</h3>
              <button onClick={this.changeName}>Change It</button> 
              <button onClick={this.changeName.bind(this,"CODER")}>Change It</button> aapde changeNmae ma argument pass karvi hoy to .bind use jarvanu*/
              <button onClick={()=>{this.changeName("Ramesh")}}>Change It</button>/*aapde changeNmae ma argument pass karvi hoy to .bind use jarvanu-->*/
              <FunctionComponent/> 
             <FComponent name="saurabh" status="single"/>
             <FComponent name="Suresh" status="Commited"/>
            <FComponent name="Mobii" status="Coder"/>
             }
             

      </div>
    )
  }
}

---------------------------------------------------------------------------------------------------------------
Root folder nu package.json ma aapde command lakhsu 

{
  "name": "mern-redux",
  "version": "1.0.0",
  "description": "",
  "main": "App.js",
  "scripts": {
    "test": "node app.js",
    "client":"npm run start --prefic client",
    "server":"nodemon app.js",
    "dev": "concurrently \"npm run client\" \"npm run server\""
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/saurabhpatel98/MERN-With-Redux.git"
  },
  "keywords": [
    "MERN-With-Redux"
  ],
  "author": "Saurabh Khunt",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/saurabhpatel98/MERN-With-Redux/issues"
  },
  "homepage": "https://github.com/saurabhpatel98/MERN-With-Redux#readme",
  "dependencies": {
    "body-parser": "^1.19.0",
    "concurrently": "^5.1.0",
    "cors": "^2.8.5",
    "ejs": "^2.6.1",
    "ejs-lint": "^1.1.0",
    "express": "^4.17.1",
    "mongoose": "^5.9.7",
    "nodemon": "^2.0.3"
  }
}


====================================================================
"scripts": {
    "test": "node app.js",
    "client":"npm run start --prefic client",
    "server":"nodemon app.js",
    "dev": "concurrently \"npm run client\" \"npm run server\""
  },


  "client":"npm run start --prefix ReactDemo",  //ReactDemo folder ma aapde command run karva mate 
  ==>aama prefix pachhi  frontend folder nu name aapde aama ReactDemo chhe etle ReactDemo use thase.


  "server":"nodemon app.js", OR "server":"node app.js",
  ==>server ma command run karva mate eeno use thai .



  "dev": "concurrently \"npm run client\" \"npm run server\""
  ==>aama aapde je command concurrently use karva hoy ee lkhavana hoy


have aapde "npm run dev" command run karsu etle concurrenty call thase.

=========================================================================================================================
Have Production level per Appde Project karta hoiye Tyare aa badhu kam lage
aapde Heroku ma Netlify ee badha ma aapde kam karta hoiye tyare aa badhu kam lage.

have aapde ReactDemo ma jai CMD open karine build karsu ee Production ma kam lagse.

npm run build

==>aapde aa command use karsu etle ReactDemo ma eek folder banse build name nu.
==>have build ma aapde nodejs na server mate na port mate j kam karva nu rese ....jem react ma aapde server run thatu hatu ee build ma nai thai eema khali aapde static folder ee aapde path aapvano rese.

==>have dharoke aapde build create kari nakhiye and src file ee badhi file ma chnages karie etle aapde pachhu build run karvu padse.

*==>aapde node js ne kevu padse ke aa build name nu folder chhe ee mate aapde niche pramane karsu...

in app.js main file ma add karvanu


//In Case of Production
app.use(express.static('ReactDemo/build'))       aa eenu static foldet use jarse.
const path = require('path');                    path jova mate aa libabry use thase
app.get('*',(req,res)=>{                          gamme ee request thai tare aa logic j call karavanu eem thai.
    res.sendFile(path.resolve(__dirname,'ReactDemo','build','index.html'));
})
