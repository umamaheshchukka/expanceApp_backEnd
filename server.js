require('dotenv').config()//npm install dotenv
console.log(process.env)
const express = require('express')
const app = express()
const cors = require('cors')
const {checkSchema} = require('express-validator')
const port =3050
const configureDB=require('./config/db')
const categoryCltr=require('./app/controllers/categories-controllers')
const categoryValidation=require('./app/validations/category-validations')
const expenseValidation=require('./app/validations/expense-validations')
const expenseCltr=require('./app/controllers/expenses-controller')
const usersCltr=require('./app/controllers/user-controller')
const authenticateUser=require('./app/middlewares/auth')
configureDB()
app.use(express.json())

app.use(cors())
// Api for categories
// routing level middleware function - authenticateUser
app.post('/api/categories',authenticateUser,checkSchema(categoryValidation),categoryCltr.create)

app.get('/api/categories',authenticateUser,categoryCltr.list)

app.put('/api/categories/:id',authenticateUser,checkSchema(categoryValidation),categoryCltr.update)

app.delete('/api/categories/:id',authenticateUser,categoryCltr.delete)
// Api for expenses
app.get('/api/expenses',authenticateUser,expenseCltr.list)

app.post('/api/expenses',authenticateUser,checkSchema(expenseValidation),expenseCltr.create)

app.put('/api/expenses/:id',authenticateUser,checkSchema(expenseValidation),expenseCltr.update)

app.delete('/api/expenses/:id',authenticateUser,expenseCltr.delete)
app.post('/api/users/login',usersCltr.login)

app.listen(port, () => {
    console.log('Expense App is running successfully on port 3050')
})


