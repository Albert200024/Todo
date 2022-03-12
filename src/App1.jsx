import React, {useReducer} from 'react';
import reducer, {init} from './reducer';

function App1(parasm){
    const [count, dispanch] = useReducer(reducer, init.count)
    const [text, dispanch1] = useReducer(reducer, true)
    
    return(
    <>
      <h2>{count}</h2>
      <button onClick={() => dispanch({type:'incriment'})}>+</button>
      <button onClick={() => dispanch({
            type:'decrement',
            payload:5
      }
      )}>-</button>

       <button onClick={() => dispanch({type:'reset'})}>RESET</button>
       {text ?  <h1> es kam </h1> : <h1> es chkam </h1>}
       <button onClick={() => dispanch1({type:"toggle"})}>Bacel Pakel</button>
     </>)
}

export default App1