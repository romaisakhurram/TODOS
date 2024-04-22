#!/usr/bin/env node
import inquirer from "inquirer";
let todos = ["Rafay", "Uzair", "Maham"];
async function createTodos(todos) {
    do {
        let answer = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: "Select an operation",
                choices: ["Add", "Update", "View", "Delete"]
            },
        ]);
        //console.log(todos);
        if (answer.select == "Add") {
            let addTodo = await inquirer.prompt([
                {
                    name: "todo",
                    type: "input",
                    message: "Add the items in the list"
                },
            ]);
            todos.push(addTodo.todo);
            todos.forEach(todo => console.log(todo));
            //console.log(todos); 
        }
        if (answer.select == "Update") {
            let updateTodo = await inquirer.prompt([
                {
                    name: "todo",
                    type: "list",
                    message: "Update the items in the list",
                    choices: todos.map(item => item)
                },
            ]);
            let addTodo = await inquirer.prompt([
                {
                    name: "todo",
                    type: "input",
                    message: "Add the items in the list"
                },
            ]);
            let newTodo = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodo, addTodo.todo];
            todos.forEach(todo => console.log(todo));
        }
        ;
        if (answer.select == "View") {
            console.log("*******TODO LIST********");
            console.log(todos);
            console.log("************************");
        }
        ;
        if (answer.select == "Delete") {
            let deleteTodo = await inquirer.prompt([
                {
                    name: "todo",
                    type: "list",
                    message: "Delete the items",
                    choices: todos.map(item => item)
                },
            ]);
            let newTodo = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newTodo];
            todos.forEach(todo => console.log(todo));
            console.log(todos);
        }
        ;
    } while (true);
}
createTodos(todos);
