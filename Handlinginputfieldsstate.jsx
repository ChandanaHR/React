//Handling input fields in react
//state.jsx
//First way
import {useState} from 'react'
function Input() {
    //const[name,setname] = useState("");
    function handlechange(e) {
        console.log("Change occurred")
    }
    return (
        <div>
            <form>
               <h3>Enter your name: </h3> <input onChange={handlechange} type="text" value={name}></input>
            </form>
        </div>
    )
}
export default Input

//second way
import {useState} from 'react'
function Input() {
    const[name,setname] = useState("");
    function handlechange(e) {
        console.log(e.target.value)
    }
    return (
        <div>
            <form>
               <h3>Enter your name: </h3> <input onChange={function demo(e){
                                                            return handlechange(e)
                                                          }} type="text" value={name}></input>
            </form>
        </div>
    )
}
export default Input

//Third way
import {useState} from 'react'
function Input() {
    const[name,setname] = useState("");
    function handlechange(e) {
        setname(e.target.value)
    }
    return (
        <div>
            <form>
               <h3>Enter your name: </h3> <input onChange={function demo(e){
                                                            return handlechange(e)
                                                          }} type="text" value={name}></input>
            </form>
        </div>
    )
}
export default Input

//Fourth way
import {useState} from 'react'
function Input() {
    const[name,setname] = useState("");
    function handlechange(e) {
        const value = e.target.value
        console.log(value)
        setname(value)
    }
    return (
        <div>
            <form>
               <h3>Enter your name: </h3> <input onChange={function demo(e){
                                                            return handlechange(e)
                                                          }} type="text" value={name}></input>
            </form>
        </div>
    )
}
export default Input

//App.jsx
import Input from "./components/Input"
function App() {
  return (
    <div>
      <Input />
    </div>
  );
}
export default App

