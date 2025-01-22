import {useState} from "react";
    var UseState = ()=>{
        var[num,setNum] = useState(0)
        return (
        <div>
            <h1>this is UseState Example</h1>
            <button onMouseEnter={()=>setNum(num-1)}>-</button>
            <h4>the number is {num}</h4>
            <button onkeyDowm={()=>setNum(num + 1)}>+</button>
            <button onDoubleCilck={()=> setNum(num)}>Reset</button>
        </div>
        )
}
export default UseState;    