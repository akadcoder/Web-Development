const fs = require("fs")
 
console.log("starting")
//fs.writeFileSync("shivraj.txt", "akadcoder is also known as dcoder")
fs.writeFile("shivraj2.txt", "shivraj is a good boy", ()=>{
    console.log("done")
    })
console.log("ending")

/*fs.writeFile("shivraj2.txt", "shivraj is a good boy", ()=>{
    console.log("done")
    fs.readFile("shivraj2.txt", (error, data)=>{
        console.log(error, data.toString())
    
})

fs.appendFile("harry.txt", "harryrobo", (e, d)=>{
    console.log(d)
})

*/