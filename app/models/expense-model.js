const mongoose=require('mongoose')
const expenseCltr = require('../controllers/expenses-controller')
const{Schema,model}=mongoose
const expenseSchema = new Schema({
    expenseDate : Date,
    amount : Number,
    categoryId : Schema.Types.ObjectId,
    description : String
},{timestamps:true})
const Expense = model('Expense',expenseSchema)
module.exports=Expense