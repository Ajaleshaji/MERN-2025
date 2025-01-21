import { useState } from "react";
const About = () => {
    var [text,setText]=useState("thalapathy");
    function handleText(e){
      setText(e.target.value)
}
    return(
        <div>
            <h2>This is about components.</h2>
            <h2>textarea:</h2>
           {/*<textarea value={text} onChange={(event)=>setText(event.target.value)}/>*/}
            <textarea value={text} onChange={handleText}/>
            <p>the text is {text}</p>
        </div>
    )
}
export default About;