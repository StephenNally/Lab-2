import { TasksInterface } from "./TasksInterface";

class Todo implements TasksInterface{

    Tasks: string[] = [];

    addTask(task: string):number{
        let length: number = this.Tasks.push(task);
        console.log(task + " has been added to my Tasks!");
        return length;
    }

}

let myTodo = new Todo();
myTodo.addTask("Sleep");