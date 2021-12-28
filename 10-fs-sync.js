const { readFileSync, writeFileSync } = require('fs')

console.log('start task')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
  './content/result-sync.txt',
  `Here is the result: ${first}, ${second}`,
  {flag: 'a'}
)

console.log('done task')
console.log('start new task')