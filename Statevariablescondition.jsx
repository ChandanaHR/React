//Creating a State variables with specified condition
//state.jsx
import {useState} from 'react'
function State() {
    const[count, setcount] = useState(0);
    const maxcount = 10
    const mincount = -10
    function incrementcount() {
        if(count<maxcount) {
            setcount(count+1);
        }
    }
    function decrementcount() {
        if(count>mincount) {
            setcount(count-1);
        }
    }
    return (
        <div>
            <h1>Count value is: {count}</h1>
            <button onClick={incrementcount}>Increment</button>
            <button onClick={decrementcount}>Decrement</button>
        </div>
    );
}
export default State

//App.jsx
import State from "./components/state"
function App() {
  return (
    <div>
      <State />
    </div>
  );
}
export default App
