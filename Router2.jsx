//App.jsx
import Homepage from "./pages/Homepage"
import Dashboard from "./pages/Dashboard"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./pages/Nav"
function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App

//Homepage.jsx
import {Link} from "react-router-dom";
function Homepage() {
    return (
        <div>I am in homepage
            <li><Link to="/dashboard">Dashboard</Link></li>
        </div>
    )
}
export default Homepage

//Dashboard.jsx
function Dashboard() {
    return (
        <div>I am in dashboard page</div>
    )
}
export default Dashboard

//Nav.jsx
import {Link} from "react-router-dom"
function Nav() {
    return (
        <div>
            <li><Link to = "/">Return to Home</Link><br/></li>
            <li> <Link to = "/dashboard">Return to Dashboard</Link></li>
            
        </div>
    )
}
export default Nav

