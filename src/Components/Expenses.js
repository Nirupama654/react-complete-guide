import ExpenseItem from "./ExpenseItem"
import './Expenses.css'

function Expenses(props){

    return(
        <div className="expenses">
        <ExpenseItem item = {props.item[0]}/>
        <ExpenseItem item = {props.item[1]}/>
        <ExpenseItem item = {props.item[2]}/>
        <ExpenseItem item = {props.item[3]}/>
        </div>
      
    );
}

export default Expenses;