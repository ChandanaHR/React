//Navigate1.jsx
import {Routes,Route,Link} from "react-router-dom"
import {Home,Projects} from "./Routecomponents"
import {Login} from "./Login"
import { Dashboard } from "./Dashboard"
export function Navigate1() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link> {" "}
                <Link to="/dashboard1">Dashboard</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/dashboard1" element={<Dashboard/>}></Route>
                <Route path="/projects" element={<Projects/>}></Route>
            </Routes>
        </div>
    )
}
//Login.jsx
import {useNavigate} from "react-router-dom"
import {Route1} from "./Route1.jsx"
import {Home,Projects,About} from "./Routecomponents.jsx"

export function Login() {
    const navigate = useNavigate();
    function handlelogin() {
        alert(`Login successfull`)
        navigate("/projects");
    }
    return (
        <div>
            <h1>Login page</h1>
            <button onClick={handlelogin}>Login</button>
        </div>
    )
}
//Dashboard.jsx
import {Navigate} from "react-router-dom"
export function Dashboard() {
    const isloggedin = true
    if(!isloggedin) {
        return <Navigate to="/login"/>
    }
    return <h1>Welcome to Dashboard</h1>
}
