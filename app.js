const port                  =           8000;
const express               =           require('express');
const app                   =           express();

app.get('/puneet',(request,res)=>{
    res.send('<center><h1>Hello Team!</h1></center>');
})

app.listen(port,function(){
    console.log(`Server lsitening on Port: ${port}`);
})

//https://localhost:3000
// app.listen(3000,()=>{

// });
