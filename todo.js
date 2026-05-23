const { add, list, done, delT, clear } = require("./commands.js");

const [command, val] = process.argv.slice(2)

const commands = {add, list, done,  del: delT, clear }
const func = commands[command]

if (func){
    func(val)
} else{
    console.log("This command does not exist")
}

