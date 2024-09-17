"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTask = addTask;
exports.removeTask = removeTask;
exports.updateTask = updateTask;
function addTask(tasks, name, description, countTask) {
    var newTask = {
        name: name,
        description: description,
        countTask: countTask,
    };
    return tasks.concat([newTask]);
}
function removeTask(tasks, countTask) {
    //On supprime la tâche à l'id countTask (1 = une seule tâche à supprimer)
    return tasks.splice(countTask, 1);
}
function updateTask(tasks, name, description, countTask) {
    if (countTask >= 0 && countTask < tasks.length) {
        tasks[countTask].name = name;
        tasks[countTask].description = description;
    }
    else {
        console.log("index se toruve hors du tableau : ".concat(countTask));
    }
    return tasks;
}
