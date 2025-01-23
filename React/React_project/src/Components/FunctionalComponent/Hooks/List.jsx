import { useEffect, useState } from "react"
const ListItems = ({ func})=>{
   var [numbers,setNumbers] = useState([])
   useEffect(()=>{
    console.log("Event is happening")
    setNumbers(func(1000));
   },[func])
     return(
        <div>
            <h2>This  number List is as follows according to the number present in input box</h2>
            {numbers.map((numbers,index)=>{
              return  <h4 key={index}>{numbers}</h4>;
            }
            )}
        </div>
     )
}
export default ListItems