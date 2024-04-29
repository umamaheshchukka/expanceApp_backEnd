const expenseValidationSchema = {
    expenseDate : {
        notEmpty : {
            errorMessage : "Expense date is required"
        }
    },
    amount : {
        notEmpty : {
            errorMessage : "Amount is required"
        }
    },
    categoryId : {
        notEmpty : {
            errorMessage : "CategoryId is required"
        },
        isMongoId : {
            errorMessage : "Invalid Id"
        }
    }
}
module.exports=expenseValidationSchema