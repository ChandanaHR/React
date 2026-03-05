//api.jsx
// const url = " https://emojihub.yurace.pro/api/all"
import {useState,useEffect} from 'react';
export function Fetchapi() {
    const[data,setdata] = useState([]);
    useEffect(() => {
           const fetchdata = async() => {
                try {
                    const response = await fetch("https://emojihub.yurace.pro/api/all");
                    const result = await response.json();
                    setdata(result);
                    console.log(result);
                } catch(error) {
                    console.error("Error fetching data",error)
                }
           } 
           fetchdata();    
    },[]);
    return (
        <div>
            <h1>list</h1>
            <ul>
                {data.map((details)=>{
                    return <li>{details.name}</li>
                })}
            </ul>
        </div>
    )
} 

//App4.jsx
import {Fetchapi} from './api'

function App4() {
    return (
        <div>
            <Fetchapi/>
        </div>
    )
}
export default App4

//main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App4 from './App4.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <App4/>
    </div>
  </StrictMode>,
)




import {useState,useEffect} from "react"
export function Useeffect() {
    const[count,setcount] = useState(0)
    const[count1,setcount1] = useState(0)
    useEffect(()=>{
        document.title = `Count: ${count}`;
    },[])
    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=>setcount(count+1)}>Increment</button>
            <h1>Count1:{count1}</h1>
            <button onClick={()=>setcount1(count1+1)}>Increment1</button>
        </div>
    )
}

// Basic syntax: fetch("url")
//               .then(response => response.json())
//               .then(data=>{console.log(data)})
export function Fetchapi() {
    const[users,setusers] = useState([])
    useEffect(()=>{
        fetch("https://emojihub.yurace.pro/api/all")
        .then(res => res.json())
        .then(data => setusers(data))
    },[])
    return (
        <div>
            <ul>
                {users.map(user=>{
                    return <li>{user.name}</li>
                })}
            </ul>
        </div>
    )
}

export function Async() {
    const[users1,setusers1] = useState([]);
    useEffect(()=>{
        async function fetchusers() {
            try {
                const response = await fetch("https://dog.ceo/api/breed/hound/images");
                const data = await response.json();
                setusers1(data.message)
                console.log(data)
            }
            catch(error) {
                console.log("Error fetch",error);
            }
        }
        fetchusers()
    },[])
    return (
        <div>
           {users1.map((img,index)=>(
            <img src={img} width="200"></img>
           ))}
        </div>
    )
}
