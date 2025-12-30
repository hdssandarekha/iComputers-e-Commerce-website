import { useState } from "react";


export default function Test() {
    const [count, setCount] = useState(0);
    const [status, setStatus] = useState("sleeping");


    return (
    <div className="w-full h-full bg-yellow-500 flex justify-center items-center" >
        
        <div className="w-[400px] h-[400px] bg-white flex justify-center items-center rounded-lg shadow-2xl flex-col">

            <h1 className="text-[55px]">{count}</h1>
            <div className="w-full h-[65px] p-[10px] flex justify-center items-center gap-5">
                <button onClick={
                    ()=>{
                        setCount(count-1)
                    }
                } className ="w-[100px] h-[45px] bg-blue-500 font-bold text-white">decrement</button>
                <button onClick={
                    ()=>{
                        setCount(count+1)
                    }
                } className ="w-[100px] h-[45px] bg-green-500  font-bold text-white">increment</button>
            </div>
        </div>
    </div>
    )
}