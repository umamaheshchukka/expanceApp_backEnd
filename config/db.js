const mongoose=require('mongoose')
const configureDB=async()=>{
    try{
        const config= await mongoose.connect('mongodb://127.0.0.1:27017/expense-app-oct2023')
        console.log('connected succesfuly')
    }catch(err){
        console.log('not connected to db',err)
    }
// const configureDB=()=>{
// mongoose.connect('mongodb://127.0.0.1:27017/expense-app-oct2023')
// .then(()=>{
//     console.log('Connected Successfully to db')
// })
// .catch(() => {
//     console.log('error connecting to db')
// })
}
module.exports=configureDB