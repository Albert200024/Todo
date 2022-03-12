import React from "react";
import TodoItem from "./TodoItem";
import TodoFooter from "./TodoFooter";

const Todo = ({todo}) => {
   return(
       <div>
          {todo.map((i, index) => (
              <TodoItem key={i.id} {...i}/>
            ))
          }
          <TodoFooter todo={todo} />
       </div>
   )   
}

export default Todo