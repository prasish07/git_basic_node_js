const {readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log('start')
writeFileSync('./content/result-sync.txt',`the content here is : ${first},${second}`,{flag: 'a'})
console.log(first)
console.log('its ended')