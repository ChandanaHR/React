#main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App6 from './App6.jsx'
import { BrowserRouter } from 'react-router-dom'
import RouteApp from './RouteApp.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div>
      <App6/>
    </div>
  </BrowserRouter>,
)

#App6.jsx
import { useState } from "react"
import Layout from "./Layout"
import {Userprovider} from "./Provider"
import Navbar1 from "./Navbar1"
import Profile from "./Profile"

// const[user,setuser] = useState({name:"Chandana"})
//     return (
//         <div>
//             <Layout user={user} setuser={setuser}/>
//         </div>
//     )
function App6() {
    return (
        <Userprovider>
            <Navbar1/>
            <Profile/>
        </Userprovider>
    )
}
export default App6


#context.jsx
import { createContext } from "react";

// create a context object
export const UserContext = createContext();

#Provider.jsx
import {useState} from "react"
import {UserContext} from "./context"

export function Userprovider({children}) {
    const[user,setuser] = useState({name:"chandana",role:"se"})
    return (
        <UserContext.Provider value={{user,setuser}}>
            {children}
        </UserContext.Provider>
    )
}

#Navbar1.jsx
import { UserContext } from "./context"
import {useContext} from "react"
function Navbar1() {
    const { user } = useContext(UserContext)
    return (
        <div>
            <h1>Welcome me name is {user.name}</h1>
        </div>
    )
}
export default Navbar1

#Profile.jsx
import { UserContext } from "./context"
import {useContext} from "react"
function Profile1() {
    const {user,setuser} = useContext(UserContext);
    const updatename =()=>{
        console.log(user.name)
        setuser({...user,name:"Krishna"})
    }
    return (
        <div>
            <h1>My name is, {user.name}</h1>
            <button onClick={updatename}>Update name</button>
        </div>
    )
}
export default Profile1
