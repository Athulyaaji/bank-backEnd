const bankers = require("../models/bankModel")




// add logic

addData = async (req, res) => {

    const { orderid, itemno, matid, matdesp, curqty, perqty, qtydiff, comment } = req.body

    if (!orderid || !itemno || !matid || !matdesp || !curqty || !perqty || !qtydiff || !comment) {
        res.status(404).json("all inputs are required")
    }

    try {
        const preData = await bankers.findOne({ orderid })
        if (preData) {
            res.status(403).json("orderid already present")
        }
        else {
            const newData = new bankers({ orderid, itemno, matid, matdesp, curqty, perqty, qtydiff, comment })
            await newData.save()

            res.status(200).json(newData)
        }
    }
    catch {
        res.status(400).json("logic error")
    }




}

// get data
getAllData = async (req, res) => {
    try {
        const addData = await bankers.find()
        res.status(200).json(addData)
    }
    catch (err) {
        res.status(400).json(err)

    }
}

// delete
removeData = async (req, res) => {
    const { id } = req.params
    try {
        const removedData = await bankers.findByIdAndDelete({ _id: id })
        res.status(200).json(removedData)
    }
    catch (err) {
        res.status(400).json(err)
    }
}

module.exports = { addData, getAllData, removeData }