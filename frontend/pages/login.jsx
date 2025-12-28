export default function LoginPage() {
    return (

        <div className="w-full h-full bg-[url('/background3.jpg')] bg-cover no-repeat flex justify-center items-center">
        <div className="w-[50%] h-full flex justify-center items-center">
            <img src="/logo.png" alt="Login Illustration" className="w-[300px] h-[300px] object-cover"/>
        </div>
        <div className="w-[50%] h-full flex justify-center items-center">
            <div className="w-[400px] h-[500px] backdrop-blur-md shadow-2xl rounded-lg flex flex-col">
            
                <input type="email" placeholder="Email" className="w-[80%] h-[35px] mt-20 mx-auto block rounded-md px-4 text-lg outline-none border border-secondary"/>
                <input type="password" placeholder="Password" className="w-[80%] h-[35px] mt-10 mx-auto block rounded-md px-4 text-lg border border-secondary outline-none  "/>
                <p className="mt-2 text-center text-white text-right mr-[10%]">Forgot password?<a href="/forgot-password" className="text-accent font-bold hover:underline">Reset</a></p>
                <button className="w-[80%] h-[35px] mt-16 mx-auto block rounded-md bg-accent text-white  font-bold text-lg hover:bg-blue-600 transition">Login</button>
                <button className="w-[80%] h-[35px] mt-6 mx-auto block rounded-md border border-accent text-secondary  font-bold text-lg hover:bg-accent hover:text-white transition">Login with Google</button>
                <p className="mt-6 text-center text-secondary">Don't have an account? <a href="/register" className="text-accent font-bold hover:underline">Register</a></p>
            </div>
        </div>
            
        </div>
    )
}