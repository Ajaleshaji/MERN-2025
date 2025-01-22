import {useState} from "react";
const UseEffect = ()=>{
    var [text,setText]=useState("");
    return(
        <div>
            <h1>this is useEffect example</h1>
            <input type="number" value={text} onChange={(e)=>setText(e.target.value)}/>
            <h2>Text is {text}</h2>
        </div>
    )
}
export default UseEffect;