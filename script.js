
// while(true){
//   tasks.push(input);
//   input = prompt(input);
//   if(input.toLowerCase() === "quit")break;
// }
// // Show todo task
// // let show = 
// // console.log(show);
// // tasks.join("\r\n");
// document.getElementById("list").innerHTML = `<input type="checkbox" id= "td" name="td" value="tasks"> 
//   <label for="td"> ${tasks} </label><br>`;


//**********************************
//Second trial

// let tasks = [];
// let input = prompt('Choose A Command!');

// while(true){
//   if (input.toLowerCase() === "new"){
//     input = prompt('What would you like todo today');
//     tasks.push(input);
    
//   } else if (input.toLowerCase() === "del"){
//     document.getElementById("list").innerHTML = " ";
//   } else if(input.toLowerCase() === "quit"){break;
//     } else{
//     input = prompt('Choose A Valid Command!');
//                                            }
    
//   document.getElementById("list").innerHTML = `<input type="checkbox" id= "td" name="td" value="tasks"> <label for="td"> ${tasks} </label><br>`;

//   input;
// }


//****************
//Third Trial

let input = prompt('Choose A Command!');
let todoContainer = document.getElementById("list");


//Creating a addNew Function
  function addNew(value){
    if(value !== " " || null){
      let todo = document.createElement('p');
      todo.innerHTML = `<input type="checkbox" id= "td" name="td" value="input"> <label for="td"> ${value} </label><br>`;
      todoContainer.appendChild(todo);
      todoContainer.style.display = "none";
    }
    // else{
    //   alert("You did not write a todo");
    //   input = prompt('What would you like todo today');
    // }
  }

while(true){
  if(input.toLowerCase() === "new"){
    input = prompt('What would you like todo today');
    addNew(input);  
    
    } else if (input.toLowerCase() === "del"){
    todoContainer.value = '';
    
    }else if (input.toLowerCase() === "list"){
    todoContainer.style.display = "block";
    break;
    
    } else if(input.toLowerCase() === "quit"){
    break;
    
    }else{
    input = prompt('Choose A Valid Command!');
    }
}
