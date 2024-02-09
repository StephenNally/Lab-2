"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Todo = /** @class */ (function () {
    function Todo() {
        this.Tasks = [];
    }
    Todo.prototype.addTask = function (task) {
        var length = this.Tasks.push(task);
        console.log(task + " has been added to my Tasks!");
        return length;
    };
    return Todo;
}());
var myTodo = new Todo();
myTodo.addTask("Sleep");
