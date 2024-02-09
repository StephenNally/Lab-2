var myArray = [];
function addTask(task) {
    var length = myArray.push(task);
    console.log(task + " has been inserted into array");
    return myArray.length;
}
function listAllTasks() {
    myArray.forEach(function (item) {
        console.log(item + "is in our list of tasks");
    });
}
function deleteTask(task) {
    var index = myArray.indexOf(task);
    if (index > -1) {
        myArray.splice(index, 1);
        console.log(task + " removed from list of tasks");
    }
    else {
        console.log(task + " is not in task list");
    }
    return myArray.length;
}
addTask("Eat");
listAllTasks();
deleteTask("Work");
