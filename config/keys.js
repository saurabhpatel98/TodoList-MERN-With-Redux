if(process.env.NODE_ENV==="production"){
    module.exports= require("./prod")
}else{
    console.log("dev.js called")
    module.exports= require("./dev")
}
