//Creating multiple state variables using useState
//state.jsx
import {useState} from 'react'
function State() {
    const[count, setcount] = useState(0);
    const[incrementby, incrementbyfunc] = useState(1);
    function incrementcount() {
        setcount(count+incrementby);
    }
    function decrementcount() {
        setcount(count-1);
    }
    function newincrementcount() {
        incrementbyfunc(incrementby+1);
    }
    return (
        <div>
            <h1>Count value is: {count}</h1>
            <button onClick={incrementcount}>Increment</button>
            <button onClick={decrementcount}>Decrement</button>
            <h1>We are incrementing the value by: {incrementby}</h1>
            <button onClick={newincrementcount}>Increment</button>
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
