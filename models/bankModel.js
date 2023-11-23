const mongoose=require('mongoose')


const bankSchema=new mongoose.Schema({
    orderid:{
        type:String,
        required:true,
        trim:true,
        unique:true,
       
    },
    itemno:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    matid:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    matdesp:{
        type:String,
        required:true,
        trim:true,
       
    },
    curqty:{
        type:String,
        required:true,
        trim:true,
        
    },
    perqty:{
        type:String,
        required:true,
        trim:true,
       
    },
    qtydiff:{
        type:String,
        required:true,
        trim:true,
       
    },
    comment:{
        type:String,
        required:true,
        trim:true,
       
    }
})

const bankers=new mongoose.model('bankers',bankSchema)

module.exports=bankers