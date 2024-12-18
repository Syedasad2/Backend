import express from "express";
const app = express();
const PORT = 4000;

app.get("./home" , (req, res)=> {
    console.log(req);
    res.send("hello to first");   
});

app.listen(PORT, ()=> console.log("port is running"+ PORT));