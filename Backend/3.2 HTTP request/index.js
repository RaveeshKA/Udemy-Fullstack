import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {   
    res.send("<h1>This is the about page.</h1><p>Welcome to our website!</p>");    
});

app.get("/services", (req, res) => {
    res.send("This is services page");
});

app.get("/contact", (req, res) => {
    res.send("This is contact page");
});

app.listen(port, () => {
  console.log("Server is running on port ${port}");
}) ; 