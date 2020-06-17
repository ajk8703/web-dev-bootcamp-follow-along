var todos = [];

window.setTimeout(function(){

    do {
        var input = prompt("What would you like to do?");
    
        if(input === "list"){
            listTodos();
        }
        
        else if (input === "new"){
            newTodo();
        }

        else if (input ==="delete"){
            deleteTodo();
        }

    } while (input !== "quit");
    
    console.log("OK, YOU QUIT THE APP");
}, 500);


function listTodos(){
    console.log("**********");
    todos.forEach(function(todo, i){
        console.log(i + ". " + todo);
    })
    console.log("**********");
}

function newTodo(){
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
}

function deleteTodo(){
    var index = prompt("Enter index of todo to delete");
    todos.splice(index, 1);
}