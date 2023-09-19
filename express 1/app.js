const req = require('express/lib/request');
const res = require('express/lib/response');

const app = require('express')();

const PORT =  3000;

app.listen(
    PORT,
    () => console.log(`server is running on ${PORT} `)
);
app.get('/getRequest', (req,res)=>{
    res.send("Welcome to my Express.js server!")
});
app.post ('/postRequest',(req,res)=>{
    res.send("hello this is POST METHOD")
} )