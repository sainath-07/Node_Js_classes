const express = require('express');

// here if we append the paraenthsis  to the express it will convert into executable state.
const app = express();

// Creating the browser routes

// this get method will provide the routes, Here routes could be like get,post etc... here empty string represents the HOME page

app.get('',(req,resp)=>{
      resp.send(`hello , this is HOME page`);
});
// A function that will be executed when the route is matched


//1. Sending a String Response

app.get('/about',(req,resp)=>{
      resp.send(`hello , this is About page`);
});

// 2.Sending an HTML Response

app.get('/html',(req,resp)=>{
        resp.send(`<h1>Heading page... it is HTML response..</h1>`)
})

// 3. Sending a JSON Object

app.get('/object',(res,resp)=>{
       resp.send({name:"sainath",age:20})
})


app.get('*',(req,resp)=>{
      resp.send(`Page is NOT FOUND....`);
});

app.listen(5000);







