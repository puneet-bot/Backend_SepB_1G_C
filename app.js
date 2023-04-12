const port                  =           8000;
const express               =           require('express');
const app                   =           express();
const db                    =           require('./config/mongoose');
const expressLayouts        =           require('express-ejs-layouts');

app.use(express.urlencoded({extended:false}));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes'));

app.listen(port,function(){
    console.log(`Server lsitening on Port: ${port}`);
})

//https://localhost:3000
// app.listen(3000,()=>{

// });
