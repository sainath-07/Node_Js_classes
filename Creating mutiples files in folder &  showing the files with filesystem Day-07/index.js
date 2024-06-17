const { dir } = require('console')
const fs = require('fs')


// To create a files in particular we need to use the path module to access the path of particular folder.
const path = require('path')
const dirpath=path.join(__dirname,'/All_files')

// Creating the multiple files using the fs module and loop
for(i=1;i<=4;i++){
    fs.writeFileSync(dirpath+`/hello${i}.txt`,`A simple file `)
}

// To read the file name 

fs.readdir(dirpath,(error,files)=>{
    if(error){
        console.log(error,"error")
        return
    }
           files.forEach(file=>{
            console.log(file)
           });
});