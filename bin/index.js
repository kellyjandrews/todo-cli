#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

let args = process.argv.slice(2);
let argCount = args.length;

// get the todo file contents
let todoFilePath = path.join(__dirname, 'todos.txt');
let rawdata = fs.readFileSync(todoFilePath, "utf-8");
let todos = rawdata.split(",");

// if there are new items, add them to the file.
// else display the current list
if (argCount != 0) {

    for (let i = 0; i < argCount; i++) {
        todos.push(args[i])
    }

    fs.writeFileSync(todoFilePath, todos);
    let plural = argCount > 1 ? 's' : '';

    console.log(`${argCount} new todo${plural} created.`)

} else {

    for (let i = 0; i < todos.length; i++) {
        console.log(todos[i])
    }

}

// this is the bare minimum to add new todo items in node
// however, to begin adding more functionality, requires significant effort
// Help text, flags, additional commands, error handling

