const fs= require('fs')
const path = require('path')


const dirpath=path.join(__dirname,'/CRUD folder')

const filepath=`${dirpath}/file.txt`


// Creating the file.
// fs.writeFileSync(filepath,"new file created successfully")

// Readig the existing file
// fs.readFile(filepath,'utf8',(err,content)=>{
//     console.log(content)
// })


// udpating the file content
// fs.appendFile(filepath," added ",(err)=>{
//        if(!err) console.log("File updated successfully!...")
// })


// old file path name, new file path name

// fs.rename(filepath,`${dirpath}/meta_data.txt`,(err)=>{
//     if(err) console.log("update successfully")

// })

// Deleting the file

// fs.unlinkSync(`${dirpath}/meta_data.txt`)

let a =10
let b=0

setTimeout(() => {
    b=10
    console.log("hello")
}, 1000);
console.log(a+b)