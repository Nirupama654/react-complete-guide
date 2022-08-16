import "./NewExpense.css"
import ExpenseForm from './ExpenseForm'
import { useState } from "react";

function NewExpense(props) {

    const [isEditing, SetIsEditing] = useState(false);
    const startEditHandler = () => {
        SetIsEditing(true)
    }
    const stopEditHandler = () => {
        SetIsEditing(false)
    }


    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData
        };
        props.onAddExpense(expenseData);
        SetIsEditing(false)
    }



    return (
        <div className="new-expense">
            {
                isEditing === true ? 
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} stopEditHandler = {stopEditHandler}/> :
                <button className="new-expense button" onClick={startEditHandler}>
                    Add New Expense
                </button>
            }

        </div>
    );

}

export default NewExpense;