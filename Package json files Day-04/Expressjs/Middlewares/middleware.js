const express = require('express')
const reqFilter= require('./index')
const route= express.Router()
const app=express()

//applying the middle ware to all routes. 

// const reqFilter=(req,resp,next)=>{
//     // Three parameter are mandotry

//     if(!req.query.age){
//             resp.send("<h1>Please enter the age</h1>")
//     }
//     else if (req.query.age<18){
//         resp.send("<h1>you are not allowed to access this page.</h1>")
//     }
//     else{
//         // if we dont call the nex() method page will be always in the loading state.
//         next()

//     }

// }


// if we use the use() method and pass arg as middleware function it will apply the middle ware to all the routes

// if we want to apply the middleware to only one routes we need to pas the middleware function to that route

// app.use(reqFilter)


// Apply the route to multiple page

route.use(reqFilter)

app.get('/',(req,resp)=>{
    resp.send("home page")
})

// applying the middle ware to single route page

// if we want to apply the middle ware to only one route then direclty pass the middleware name to particular  route as second parameter

app.get('/about',reqFilter,(req,resp)=>{
    resp.send("about page")

})


// here we have to replace the app in place of app
route.get('/contact',reqFilter,(req,resp)=>{
    resp.send("contact page")

})

route.get('/blog',(req,resp)=>{
    resp.send("Blog page")

})


app.use('/',route)


app.listen(5000)