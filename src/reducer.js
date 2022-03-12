export let init = {count:0}

const reducer = (state, action)=> {
     switch (action.type) {
         case 'incriment':
              return state + 5
         case 'decrement':
              return state - action.payload  
         case 'reset':
              return 0
         case 'toggle':
              return !state
         default:
             return state;
     }
}

export default reducer