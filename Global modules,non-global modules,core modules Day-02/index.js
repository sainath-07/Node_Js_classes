// Creating the files using the Non global modules 


const fs=require('fs')
console.log("Global modules,non-global modules,core modules Day-02")
// fs.writeFileSync('myfile.txt', 'utf8');


const vs=require('fs').writeFileSync;
vs("VSFILE.txt","this is vsfile ")