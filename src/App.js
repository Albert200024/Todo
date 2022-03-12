import './App.css';
import style from './Todo_react/todo.module.css'
import reducer from './Todo_react/reducer';
import { useEffect, useState, useReducer} from 'react'
import Context from './Todo_react/Context';
import Todo from './Todo_react/Todo';
// import App1 from './App1';

function App() {
  let [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todo')))
  let [inpVal, setInpVal] = useState("");
  
  useEffect(() => {
     if(!localStorage.hasOwnProperty('todo')){
        localStorage.setItem('todo', JSON.stringify([]))
     } 
  }, []) 
  
  useEffect(() => {
     localStorage.setItem('todo', JSON.stringify(state))
  }, [state])

  function addTodo(e){
      if(e.key === 'Enter'){
        dispatch({
                    type:'add',
                    payload:inpVal
                  })
          setInpVal('')
      }
  }
   
  return (
    <div className={style.conatinerTodo}>
      <div className={style.todo1}>
         <p className={style.tdod_text}>TODO</p>
         <div className={style.todo}>
           <Context.Provider value={{dispatch}}>
              <input
                className={style.todo_inutADD} 
                 type='text' 
                 placeholder='type your task'
                 value={inpVal}
                 onChange={(e) => setInpVal(e.target.value)}
                 onKeyDown={addTodo}
              />
              <Todo todo={state} />
            </Context.Provider>
         </div>
       </div>
    </div>    
   )
}

export default App;
