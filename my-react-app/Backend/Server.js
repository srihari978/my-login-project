const express=require("express");
const app=express();
const cors=require("cors");
app.use(cors());
app.use(express.json());
app.post('/login',(req,res)=>{
    console.log(req.body);
})
app.listen(5000, () => {
  console.log("Server running on port 5000");
});