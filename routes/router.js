const express=require('express')
const { addData, getAllData,removeData } = require('../controllers/logic')

const router=new express.Router()

// add details
router.post('/bankers/add',addData)

// get all details
router.get('/bankers/getData',getAllData)


// delete data
router.delete('/bankers/removeData/:id',removeData)


module.exports=router