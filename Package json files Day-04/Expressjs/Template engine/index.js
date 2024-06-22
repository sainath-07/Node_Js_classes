const express = require('express')
const path = require('path')
const app = express()

const filepath=path.join(__dirname,'/public')

// console.log(filepath)

app.get('/contact',(req,resp)=>{
    resp.sendFile(`${filepath}/contact.html`)
    
})



// By using the set method we will set the template engine 

app.set('view engine','ejs')


// to set the template engine we need to pass the first parameter as view engine and second parameter as package name like ejs




// steps to display EJS file

// 1. we need to pass the first parameter as view engine
// 2. name of the package engine
// 3. we will access the ejs files using the router method in the place of the sendfile

app.get('/profile',(req,resp)=>{
    const user={
        name :"sainath",
        email : "sainath@gmail.com",
        city : "hyd",
        skills : ["java","sql","mango db",'css','javascript']
    }
     resp.render('profile',{user})
})

app.get('/login',(req,resp)=>{
    resp.render('login')

})

app.listen(5000)