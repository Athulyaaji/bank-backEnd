const mongoose=require('mongoose')

mongoose.connect(process.env.baseurl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("_______Mongodb Atlas Conntected___________");
}).catch(()=>{
    console.log("_______mongodb connection error________");
})