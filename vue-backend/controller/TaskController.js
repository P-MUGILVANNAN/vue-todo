const express = require('express');
const TaskSchema = require('../model/TaskSchema')
const router = express.Router();

// Endpoint to create tasks
router.post('/createtask',(req,res)=>{
    TaskSchema.create(req.body)
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => {
        res.status(400).json({ message: err.message });
    })
});

// endpoint to get the tasks
router.get("/gettasks",(req,res)=>{
    TaskSchema.find()
    .then((data)=>{
        res.status(200).json(data)
    })
    .catch((err)=>{
        res.status(400).json({message:err.message})
    })
})

// endpoint to update the tasks
router.put("/updatetask/:id",(req,res)=>{
    TaskSchema.findByIdAndUpdate(req.params.id,req.body)
    .then((data)=>{
        res.status(200).json(data);
    })
    .catch((err)=>{
        res.status(400).json({message:err.message});
    })
});

// endpoint to delete the tasks
router.delete("/deletetask/:_id",(req,res)=>{
    TaskSchema.findByIdAndDelete(req.params._id)
    .then(()=>{
        res.status(200).json({message:"Task deleted successfully"})
    })
    .catch((err)=>{
        res.status(400).json({message:err.message});
    })
})


module.exports = router;