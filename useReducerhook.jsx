//Introduction
//Demo1.jsx
import {useState,useReducer} from 'react'
function Demo() {
    const[event, setevent] = useState(0);
    const[state, dispatch] = useReducer(reducer,0);
    function increment() {
        setevent(event+1)
    }
    function reducer(state,action) {
        if(action.type=="increment") {
            return state+action.payload;
        }
    }
    return (
        <div>
            UseState:
            <input onChange={(e)=>setevent(e.target.value)} type="text" value={event}/>
            <button onClick={increment}>Click me</button>
            UseReducer:
            <input type="text" value={state} readOnly/>
            <button onClick={()=>dispatch({type:"increment",payload: 1})}>Click me once</button>
        </div>
    );
}
export default Demo

