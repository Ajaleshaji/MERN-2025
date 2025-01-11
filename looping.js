/*var a =10
const con = 3.14
console.log(a)
console.log(con)
{
    let a =20
    let b =30 
    console.log(a)
    console.log(b)
}
console.log(a)
console.log(con)*/

/*function restOpEg(a,b...args){
    consloe .log(a)
    console.log(b)
    console.log(arg)
}
restOpEg(10,20,30,40,50,...b)*/

/*var array =[10,20,30]
var [a,b,c,d]= array
console.log(a,b,c);*/
/*function submitForm(submitMessage, isFormValid) {
    if (isFormValid()) { 
      console.log("Fields validation successful");
      console.log(submitMessage);
    } else {
      console.log("Form validation failed");
      console.log("Form validation unsuccessful");
    }
  }
  
  function formValidation() {
    const email = "sece@sece.ac.in";
    const password = "12345678";
    
 
    if (email === "sece@sece.ac.in" && password === "12345678") {
      return true;
    } else {
      return false;
    }
  }
  submitForm("Form submitted successfully", formValidation);*/
  async function asAw(){
    setTimeout(()=>{
        console.log ("inside Timeout");
    },5000)
  }
asAw().then(function(output){
    console.log(output);
})