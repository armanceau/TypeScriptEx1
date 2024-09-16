"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTask = addTask;
function addTask(tasks, nom, createur, description) {
    var newTask = {
        nom: nom,
        createur: createur,
        description: description
    };
    return tasks.concat([newTask]);
}
