import AdminPage from "../pages/admin"
import HomePage from "../pages/home"
import LoginPage from "../pages/login"
import Test from "./components/test"
import { Routes, Route } from "react-router-dom"  
import {Toaster} from "react-hot-toast" 

// Main application component
function App() {
  return (
  <div className="w-full h-screen bg-primary text-secondary">
  <Toaster position="top-right "/>
    <Routes>
      <Route path ="/" element={<HomePage/>}/>
      <Route path ="/admin/*" element={<AdminPage/>}/>
      <Route path ="/login" element={<LoginPage/>}/>
      <Route path ="/test" element={<Test/>}/>
    </Routes>
  </div>
  )
}

export default App
