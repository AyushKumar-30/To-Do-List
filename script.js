const Var1= document.getElementsByClassName("TaskList")[0];
const Var3= document.getElementsByClassName("box")[0];

function AddTask(){
    if(Var3.value === ''){
        alert("type something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=Var3.value;
        Var1.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }

    Var3.value = "";
    saveData();
}

// Add an event listener to the task list
Var1.addEventListener("click", function(e) {
    // Check if the clicked element is a list item
    if (e.target.tagName === "LI") {
        // Toggle the "Task" class on the list item
        e.target.classList.toggle("Task");
        saveData();
    } 
    // Check if the clicked element is a span (the delete button)
    else if (e.target.tagName === "SPAN") {
        // Remove the parent element of the span (the list item)
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data", Var1.innerHTML);
}

function getData(){
    Var1.innerHTML = localStorage.getItem("data");
}

getData();