//Making API call using useEffect
import {useEffect, useState} from 'react'
const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "a48b0afd953d4ca185975cb77a6320f1"
function Search() {
    const [query, setquery] = useState("pizza")
    useEffect(()=>{
        async function fetchfood() {
            const response = await fetch(`${URL}?{query}&apiKey=${API_KEY}`)
            const data = await response.json() 
            console.log(data.results)
        }
        fetchfood()
    },[query])
    return (
        <div>
            <input value={query} onChange={(e)=>setquery(e.target.value)} type="text"/>
        </div>
    )
}
export default Search

//Creating state to save food items
//App.jsx
import {useState} from 'react'
import Search from "./components/Food"
function App() {
  const [fooddata, setfooddata] = useState([])
  return (
    <div>
      <Search fooddata={fooddata} setfooddata={setfooddata} />
      {fooddata.map((fooditem)=><h1>{fooditem.title}</h1>)}
    </div>
  );
}
export default App
//Food.jsx
import {useEffect, useState} from 'react'
const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "a48b0afd953d4ca185975cb77a6320f1"
function Search({setfooddata}) {
    const [query, setquery] = useState("pizza")
    useEffect(()=>{
        async function fetchfood() {
            const response = await fetch(`${URL}?{query}&apiKey=${API_KEY}`)
            const data = await response.json() 
            console.log(data.results)
            setfooddata(data.results)
        }
        fetchfood()
    },[query])
    return (
        <div>
            <input value={query} onChange={(e)=>setquery(e.target.value)} type="text"/>
        </div>
    )
}
export default Search
