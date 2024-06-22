const express = require('express');

// here if we append the paraenthsis  to the express it will convert into executable state.

// This instance of the Express application is used to set up the server, define routes, and handle requests and responses.


// Create an instance of an Express application

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



// Navigation to  about page from contact page

app.get('/contact',(req,resp)=>{
      resp.send(`<h1>contact page</h1>
                <a href='/about'>click here to go about page.</a> `);
})



// geting the data from browser url using the request.kquery 


app.get('/input',(req,resp)=>{
      resp.send(`<input type="text" style="font-size:45px" value=${req.query.name}>
                 <div>This is a input field page...</div>
                 <div style="border:2px solid red ;font-size:45px">${req.query.name}</div>`)
})

// Always place this place not found at bottom otherwise it will not route to particular page,

app.get('*',(req,resp)=>{
      resp.send(`Page is NOT FOUND....`);
});



app.listen(5000);







