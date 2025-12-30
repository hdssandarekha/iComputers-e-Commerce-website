import { use, useState } from "react"
import axios from "axios"   
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"


export default function LoginPage() {
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    /*function login(){
        console.log("email:", email)
        console.log("password:", password)

        //Post request to backend
        axios.post("http://localhost:3000/users/login", 
            {
                email: email,
                password: password   
            }
        ).then(
                (response)=>{
                    console.log(response) 
                }
        ).catch(
            (error)=>{
                console.log("Login failed:", error)
            }
        )
    }*/

    async function login(){
        try{
            //Post request to backend using vite env variable
            const response = await axios.post(import.meta.env.VITE_API_URL + "/users/login",
                {
                    email: email,
                    password: password   
                }
            )
            console.log(response)
            if(response.data.role == "admin")
            {
                //we should redirect to admin dashboard "/admin"
                //window.location.href = "/admin"
                navigate("/admin")  
            } else{
                //redirect to user homepage "/"
            }
            toast.success("Login successful") // show success message using toast
        }catch(error){
            console.log("Login failed:", error)
            toast.error("Login failed")  // show error message using toast
        }
    }

    return (

        <div className="w-full h-full bg-[url('/background3.jpg')] bg-cover no-repeat flex justify-center items-center">
        <div className="w-[50%] h-full flex justify-center items-center">
            <img src="/logo.png" alt="Login Illustration" className="w-[300px] h-[300px] object-cover"/>
        </div>
        <div className="w-[50%] h-full flex justify-center items-center">
            <div className="w-[400px] h-[500px] backdrop-blur-md shadow-2xl rounded-lg flex flex-col">
            
                <input 
                type="email" 
                placeholder="Email" 
                onChange={
                    (e)=>{
                        setEmail(e.target.value) //updating email state variable  
                    }
                } 
                className="w-[80%] h-[35px] mt-20 mx-auto block rounded-md px-4 text-lg outline-none border border-secondary"/>
                <input 
                type="password" 
                placeholder="Password" 
                onChange={
                    (e)=>{
                        setPassword(e.target.value) //updating password state variable
                    }
                }
                className="w-[80%] h-[35px] mt-10 mx-auto block rounded-md px-4 text-lg border border-secondary outline-none  "/>
                <p className="mt-2 text-center text-white text-right mr-[10%]">Forgot password?<a href="/forgot-password" className="text-accent font-bold hover:underline">Reset</a></p>
                <button onClick={login} className="w-[80%] h-[35px] mt-16 mx-auto block rounded-md bg-accent text-white  font-bold text-lg hover:bg-blue-600 transition">Login</button>
                <button className="w-[80%] h-[35px] mt-6 mx-auto block rounded-md border border-accent text-secondary  font-bold text-lg hover:bg-accent hover:text-white transition">Login with Google</button>
                <p className="mt-6 text-center text-secondary">Don't have an account? <a href="/register" className="text-accent font-bold hover:underline">Register</a></p>
            </div>
        </div>
            
        </div>
    )
}