const { ResultWithContextImpl } = require('express-validator/src/chain')
const Category=require('../models/category-model')
const {validationResult}=require('express-validator')
const categoriesCltr={}
categoriesCltr.create=async(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const body = req.body
    const category = new Category(body)
    try{
    await category.save()
    res.status(201).json(category)
    }catch(err){
        console.log(err)
        res.json(err)
        res.status(500).json({notice:'Internal error'})
    }
    // c1.save()
    // .then((category)=>{
    //     res.json(category)
    // })
    // .catch((err)=>{
    //     res.json(err)
    // })
}
categoriesCltr.list=(req,res)=>{
    // try{
    //     const category=await category.find()
    //     res.status(201).json(category)
    // }catch(err){
    //     console.log(err)
    //     res.status(500).json({notice:"Internal error"})
    // }
    Category.find()
    .then((categories)=>{
        res.json(categories)
    })
    .catch((err)=>{
        res.json(err)
    })
}
categoriesCltr.delete=async(req,res)=>{
    const id = req.params.id
    try{
        const category=await Category.findByIdAndDelete(id)
        res.status(201).json(category)
    }catch(err){
        console.log(err)
        res.status(500).json({notice:"Internal error"})
    }

    // Category.findByIdAndDelete(id)
        // .then((cat)=>{
        //     if(!cat){
        //         res.status(404).json({error :"Record Not Found"})
        //     }else{
        //         res.json(cat)
        //     }   
        // })
        // .catch((err)=>{
        //     res.json(err)
        // })
}
categoriesCltr.update=async(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const id = req.params.id
    const body = req.body
    try{
       const category=await Category.findByIdAndUpdate(id,body, {new : true})
        res.status(201).json(category)
    }catch(err){
        console.log(err)
        res.status(500).json({notice:"iNTERNAL ERROR"})

    }
    // Category.findByIdAndUpdate(id,body, {new : true})
        // .then((cat)=>{
        //     if(cat){
        //         res.json(cat)
        //     }
        //     else{
        //         res.status(404).json(cat)
        //     }
        // })
        // .catch((err)=>{
        //     res.json(err)
        // })
}
// // module.exports = categoriesCltr
// const Category = require('../models/category-model')
// const { validationResult } = require('express-validator')
// const categoriesCltr = {}

// categoriesCltr.list = (req, res) => {
//     Category.find()
//         .then((categories) => {
//             res.json(categories)
//         })
//         .catch((err) => {
//             res.json(err)
//         })
// }

// categoriesCltr.create = (req, res) => {
//     const errors = validationResult(req) 
//     if(!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() })
//     }
//     const body = req.body  // const { body } = req 
//     const c1 = new Category() 
//     c1.name = body.name
//     c1.save()
//         .then((cat) => {
//             res.json(cat)
//         })
//         .catch((err) => {
//             res.json(err)
//         })
// }

// categoriesCltr.update = (req, res) => {
//     const errors = validationResult(req) 
//     if(!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() })
//     }
//     const id = req.params.id 
//     const body = req.body 
//     Category.findByIdAndUpdate(id, body, { new: true, runValidators: true  })
//         .then((cat) => {
//             res.json(cat)
//         })
//         .catch((err) => {
//             res.json(err)
//         })
// }

// categoriesCltr.destroy = (req, res) => {
//     const id = req.params.id 
//     Category.findByIdAndDelete(id)
//         .then((cat) => {
//             if(cat) {
//                 res.json(cat) 
//             } else {
//                 res.status(404).json({ error: 'record not found'})
//             }
//         })
//         .catch((err) => {
//             res.json(err)
//         })
// }

module.exports = categoriesCltr