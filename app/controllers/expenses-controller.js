const Expense=require('../models/expense-model')
const {validationResult}=require('express-validator')
const expenseCltr={}
expenseCltr.list=async(req,res)=>{
    try{
        const expense=await  Expense.find()
        res.status(201).json(expense)
    }catch(err){
        console.log(err)
        res.status(500).json({notice:"Internal error"})
    }
    // Expense.find()
        // .then((expenses)=>{
        //         res.json(expenses)
        // })
        // .catch((err)=>{
        //         res.json(err)
        // })      
}
expenseCltr.create=async(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const data = req.body
    const expense = new Expense(data)
    try{
     await expense.save()
     res.status(201).json(expense)
    }catch(err){
        console.log(err)
        res.status(500).json({notice:"Internal error"})
    }
}
    // c1.save()
    // .then((ex)=>{
    //     res.json(ex)
    // })
    // .catch((err)=>{
    //     res.json(err)
    // })

expenseCltr.update=async(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const id = req.params.id
    const body = req.body
    try{
        const expense= await Expense.findByIdAndUpdate(id,body,{new:true})
        res.status(201).json(expense)
    }catch(err){
        console.log(err)
        res.status(500).json({notice:"Internal error"})
    }
    // Expense.findByIdAndUpdate(id,body,{new:true})
    //     .then((expense)=>{
    //         res.json(expense)
    //     })
    //     .catch((err)=>{
    //         res.json(err)
    //     })
}
expenseCltr.delete=async(req,res)=>{
    const id = req.params.id
    try{
        const expense= await Expense.findByIdAndDelete(id)
        res.status(201).json(expense)
    }catch(err){
        console.log(err)
        res.status(500).json({notice:"Internal error"})
    }
    }

    // Expense.findByIdAndDelete(id)
    //     .then((expense)=>{
    //         if(expense){
    //             res.json(expense)
    //         }
    //         else{
    //             res.json({message:"Record not found"})
    //         }
    //     })
    //     .catch((err)=>{
    //         res.json(err)
    //     })

module.exports=expenseCltr