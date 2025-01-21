import { useState } from "react";
const Contact = () =>{
    var [num,setNum] = useState(0);
    return (
        <div>
      <h2>Welcome to Contact page</h2>
      <h3>this is a state example</h3>
      <h4>Number is {num}</h4>
      <button onClick ={()=>setNum(num+1)}>+</button>
      </div>
    );
};
export default Contact;