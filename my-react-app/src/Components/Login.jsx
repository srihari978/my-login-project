import { useState } from "react";

function Login(){
    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    console.log(email);
    console.log(password);
    const formhandle=async()=>{
      try{
        const sendingdate= await fetch("http://localhost:5000/login",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email:email,
                    password
                })
            }
        );
      
      const data=await sendingdate.json();
    //   console.log(data);
      
    }catch(e){
        console.error("Error",e);
    }
    };
    return<>
    <label>Email</label>
    <input type='email' placeholder="enter email" 
    onChange={(e)=>setEmail(e.target.value)}>

    </input>
    <label>Password</label>
    <input type='password' placeholder="enter the password"
     onChange={(e)=>setPassword(e.target.value)}></input>
    
    <button onClick={formhandle}>submit</button>

    </>
}
export default Login;