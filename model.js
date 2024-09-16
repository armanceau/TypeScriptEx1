"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTask = addTask;
exports.removeTask = removeTask;
function addTask(tasks, name, description, countTask) {
    var newTask = {
        name: name,
        description: description,
        countTask: countTask,
    };
    return tasks.concat([newTask]);
}
function removeTask(tasks, countTask) {
    return tasks.splice(countTask, 1);
}
