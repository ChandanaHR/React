//Handling multiple inputs using state
//First method
//Input.jsx
import {useState} from 'react'
function Input() {
    const[name,setname] = useState({firstname:"",lastname:""})
    function handlechange(e) {
        console.log(e.target.value)
    }
    return (
        <div>
            <form>
                <input onChange={function demo(e) { return handlechange(e)}} type="text" value={name.firstname}/>
                <input onChange={function demo(e) { return handlechange(e)}} type="text" value={name.lastname}/>
            </form>
        </div>
    )
}
export default Input

//second method
import {useState} from 'react'
function Input() {
    const[name,setname] = useState({firstname:"",lastname:""})
    return (
        <div>
            <form>
                <input onChange={(e)=>setname({firstname: e.target.value,lastname:""})} type="text" value={name.firstname}/>
                <input onChange={(e)=>setname({firstname:"",setname:e.target.value})} type="text" value={name.lastname}/>
            </form>
        </div>
    )
}
export default Input

//Third method
import {useState} from 'react'
function Input() {
    const[name,setname] = useState({firstname:"",lastname:""})
    return (
        <div>
            <form>
                <h2>Enter your name</h2>
                <input onChange={(e)=>setname({...name,firstname: e.target.value})} type="text" value={name.firstname}/>
                <input onChange={(e)=>setname({...name,lastname:e.target.value})} type="text" value={name.lastname}/>
            </form>
        </div>
    )
}
export default Input
