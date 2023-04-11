function add_todo(){


    let todo_user_text=window.prompt("Please enter your desired job");

    let todo=document.createElement("div");
    todo.classList.add("todo")

    let del=document.createElement("span")
    del.classList.add("del")
    del.textContent="حذف"

    let todo_text=document.createElement("span")
    todo_text.classList.add("todo-text")

    let circle=document.createElement("span")
    circle.classList.add("circle")

    todo_text.textContent=todo_user_text;
    if (todo_user_text!=""){
        todo.append(circle,del,todo_text);
        document.querySelector('.box-todo').append(todo);
    }
    else alert("Please enter a text")


        del.addEventListener('click', function (e){
            let confirm=window.confirm("Are you sure to delete it?")
            if (confirm){
            todo.style.display="none"
                }})


    circle.addEventListener('click', function (e){
     circle.style.backgroundColor='#c511ec'
        todo_text.style.textDecoration='line-through'
    })
}

