//require packages and declaration of constants here
const port                  =           8000;
const express               =           require('express');
const app                   =           express();
const db                    =           require('./config/mongoose');
const expressLayouts        =           require('express-ejs-layouts');

// To parse http data
app.use(express.urlencoded({extended:false}));

// To set the static file path
app.use(express.static('Assets'));

// To access layout structure defined in the Layout.ejs file
app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// To set view engine as ejs
app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes'));

app.listen(port,function(){
    console.log(`Server lsitening on Port: ${port}`);
})

//https://localhost:3000
// app.listen(3000,()=>{

// });
