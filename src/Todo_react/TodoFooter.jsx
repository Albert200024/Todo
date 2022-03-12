import style from './todo.module.css'
import Context from "./Context";
import { useContext } from "react";

function TodoFooter({todo}){
    let {dispatch} = useContext(Context) 

    const complitedSize = todo.filter(elem => elem.checked).length
    return(
        <div className={style.todo_footer}>
            <span>{complitedSize}/{todo.length} Completed</span>
            <button onClick={() => dispatch({ type:"clearCompletid"})}>Clear Completed</button>
        </div>
        
    )
}

export default TodoFooter