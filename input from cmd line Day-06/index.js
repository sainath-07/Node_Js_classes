console.log("DAY-05")


// 
// console.log(process.version)

// first enter this below line
// node index.js sainath veda saikiran


// second use index of and enter below node cmd
// console.log(process.version[2])
// node index.js sainath veda saikiran


// Creating the file form input command line


const fs = require('fs')

const input = process.argv
fs.writeFileSync( input[2] , input[3])


// creating the file and deleting the file with conditional statement

if(input[2]==="add"){
    fs.writeFileSync( input[3],input[4])
}
else if(input[2]==="remove"){
    fs.unlinkSync(input[3])
}
else {
    console.log("invalid input...")
}


