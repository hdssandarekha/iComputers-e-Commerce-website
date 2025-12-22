export default function Test() {
    return (
        <div className="w-[600px] h-[600px] border-4 relative" >
    <div className="w-[500px] h-[500px] bg-yellow-200 flex flex-col justify-center items-center"> 

        <div className = "w-[75px] h-[75px] bg-blue-500"></div>
        <div className = "w-[75px] h-[75px] bg-green-500"></div>
        <div className = "w-[75px] h-[75px] bg-purple-500 fixed right-[50px] top-[50px]"></div>
        <div className = "w-[75px] h-[75px] bg-yellow-500" ></div>
        <div className = "w-[75px] h-[75px] bg-black"></div>
        <div className = "w-[75px] h-[75px] bg-cyan-500 absolute top-[200px] right-[50px]  "></div>
    
    </div>

    </div>
    )
}