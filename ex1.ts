let myArray: string[] = [];

function addTask(task: string): number {
    let length: number = myArray.push(task);
    console.log(task + " has been inserted into array");
    return myArray.length;
}

function listAllTasks(): void {
    myArray.forEach(item => {
        console.log(item + "is in our list of tasks")
    });
}

function deleteTask(task: string): number {
    let index = myArray.indexOf(task);

    if (index > -1) {
        myArray.splice(index, 1);
        console.log(task + " removed from list of tasks");
    }
    else {
            console.log(task+ " is not in task list")
        }
        return myArray.length;
    }



addTask("Eat");
listAllTasks();
deleteTask("Work");