//Homepage.jsx
function Homepage() {
    return (
        <div>I am in homepage</div>
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

//App.jsx
import Homepage from "./pages/Homepage"
import Dashboard from "./pages/Dashboard"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App
