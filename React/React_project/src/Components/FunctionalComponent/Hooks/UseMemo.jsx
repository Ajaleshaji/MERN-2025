import {useMemo, useState} from "react";

var slowFunction=(num)=>{
    for(var slow = 0;slow<10000;slow++){}
    return num * 2
}
const UseMemo =()=>{
    var [num,setNum] = useState(0);
    var [dark,setDark] =useState(false);
    var styling = {
        backgroundColor: dark ?"black " : "white",
        color: dark ? "white" : "black"
    }
    var doublingUpANumber = useMemo(()=>{
        return slowFunction(num)
    },[num])
    return (
        <div>
            <h2>this page is ment for  useMemo Hooks.</h2>
            <input type ="number" value={num} onChange={(e)=>setNum(e.target.value)}></input>
            <button onClick={()=>setDark(curTheme=>!curTheme)}>toggle theme</button>
            <h4 style={styling}> the number is {doublingUpANumber}</h4>
        </div>
    )
}

export default UseMemo;