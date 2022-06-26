const {readFile,writeFile} = require('fs')

console.log('start')
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return 0;
    }
    const first = result
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return 0;
        }
        const second = result
        writeFile('./content/result-sync.txt',`here is the name is:${first},${second} `,(err,result)=>{
            if(err){
                console.log(err)
                return 0;
            }
            // console.log(result)
        })
        console.log(first)
})
})


console.log('its ended')