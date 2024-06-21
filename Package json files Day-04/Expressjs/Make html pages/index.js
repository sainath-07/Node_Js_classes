// const express= require('express')
// const path = require('path')

// const app=express()


// const htmlpage= path.join(__dirname,'public')

// app.use(express.static(htmlpage))


// // To access the file enter about.html in the browser url
// app.listen(5000)


// -------------------------------------------------------------------------

// in Above code we need to give the .html extension to view in the browser
// But with this below code we don't need to give the .html extension we can directly access the files without using the .html extension just we need to give the path in the url


// Removing the extension

const express= require('express')
const path=require('path')

const app = express()

const publicPath=path.join(__dirname,'public')

app.get('',(req,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)

})

app.get('/about',(req,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})

app.get('/contact',(req,resp)=>{
    resp.sendFile(`${publicPath}/contact.html`)
})

// No page found.

app.get('*',(req,resp)=>{
   resp.sendFile(`${publicPath}/help.html`)
   
})

app.listen(5000)
