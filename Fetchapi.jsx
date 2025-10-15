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
