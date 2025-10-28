// useFetch.jsx
import {useState, useEffect} from "react"

export function useFetch(url) {
    const[data,setdata] = useState(null);
    const[loading, setloading] = useState(true);
    const[error, seterror] = useState(null);

    useEffect(()=>{
        let ismounted = true;
        const fetchdata = async()=>{
            try {
                const response = await fetch(url);
                if(!response.ok) throw new Error("Network issues");
                const result = await response.json();
                if(ismounted) {
                    setdata(result)
                    seterror(null);
                }
            } catch(err) {
                if(ismounted) seterror(err.message);
            }
            finally {
                if(ismounted) setloading(false);
            }
        }
        fetchdata();
        return() => {
            ismounted = false;
        }
    },[url]);
    return {data,loading,error};
}

//App.jsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  {Function1,Function2,Function3} from './components'
import Components from './components1'
import {useFetch} from "./useFetch"

function App() {
  const {data,loading,error} = useFetch("https://emojihub.yurace.pro/api/all")
  if(loading) return <h2>Loading.....</h2>
  if(error) return <h3>Error......</h3>
  return (
    <div>
      <h2>Data</h2>
      <ul>
        {data.map((emoji) => (
          <li key={emoji.name}>{emoji.name}</li>
        ))}
        </ul>
    </div>
  )
}

export default App
