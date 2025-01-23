import { useEffect, useRef , useState} from "react";
const UseRef = ()=>{
    var [text,setText] =useState("");
    var prevRender = useRef();
    useEffect(()=>{
        prevRender.current = text
    },[text])
    return (
        <div>
            <h2>this is ment for for UseRef Hooks.</h2>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}></input>
            <h2>this is the text you type:{text}</h2>
            <h3>the previous render text is: {prevRender.current}</h3>
        </div>
    )
}
export default UseRef;