const port                  =           8000;
const express               =           require('express');
const app                   =           express();

app.use('/',require('./routes'));

app.listen(port,function(){
    console.log(`Server lsitening on Port: ${port}`);
})

//https://localhost:3000
// app.listen(3000,()=>{

// });
