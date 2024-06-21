// let a =10
// let b=0

// setTimeout(() => {
//     b=10
// }, 200);

// console.log(a+b)



// handling the asynchronous operations using the promises


let a=10

let demo=new Promise((resolve,reject)=>{
    setTimeout(() => {
        b=10
        resolve(b)
    }, 200);
    
    
})
demo.then((data)=>{
    b=data
    console.log(a+b)
})