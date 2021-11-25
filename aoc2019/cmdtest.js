const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
const inquirer = require('inquirer')
readline.question("Yuh", (yes)=>{
    console.log('Hi ' + yes)
    readline.close()
})

// var question = [{
//     type:'input',
//     name:'name',
//     message: "What is your name"
// }]
// var question2 = [{
//     type: 'input',
//     name:'name',
//     message: 'are you old'
// }]
// inquirer.prompt(question).then(answers =>{
//     console.log(answers)
// })
// inquirer.prompt(question2).then(answers2 =>{
//     console.log(answers2)
// })