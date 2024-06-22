module.exports=reqFilter=(req,resp,next)=>{
    // Three parameter are mandotry

    if(!req.query.age){
            resp.send("<h1>Please enter the age</h1>")
    }
    else if (req.query.age<18){
        resp.send("<h1>you are not allowed to access this page.</h1>")
    }
    else{
        // if we dont call the nex() method page will be always in the loading state.
        next()

    }

}