import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Context from "./Context";
import { useContext } from "react";
import style from './todo.module.css'

const TodoItem = ({id, task, checked}) => {
  let {dispatch} = useContext(Context) 
    return (
       <div key={id} className={style.todo_item}>
           <div className={style.todoItem_info}> 
                  <input type="checkbox" checked={checked} onChange={() => dispatch({
                    type:'chek',
                    payload:id
                  })}/>
                 <p>{task}</p>
           </div>
           <div>
              <DeleteIcon onClick={() => dispatch({
                type:"remove", payload:id
              })}/>
           </div>
       </div>
       
   )   
}

export default TodoItem