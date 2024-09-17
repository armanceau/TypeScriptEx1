import { expect, test, describe, it } from 'vitest'
import {addTask, updateTask, removeTask, Task} from './model.js'

//test de addTask
describe('addTask', () => {
    it('Ajouter nouvelle tâche à la liste des tâches', () => {
        const initialTask: Task[] = [
            { name: 'Task 1', description: 'First task', countTask: 1 }
        ]

        const newTaskName = 'Task 2'
        const newTaskDescription = 'Second task'
        const newTaskCountTask = 2

        const updatedTasks = addTask(initialTask, newTaskName, newTaskDescription, newTaskCountTask)

        expect(updatedTasks.length).toBe(2);

        //On regarde si la tâches contient les bonnes valeurs 
        expect(updatedTasks[1]).toEqual({
            name: newTaskName,
            description: newTaskDescription,
            countTask: newTaskCountTask,
          });
    })
})

//test de updateTask
describe('UpdateTAsk', () => {
    it('Mettre à jour une tâche de la liste', () => {
        const initialTaskToUpdate: Task[] = [
            { name: 'Task 1', description: 'First task', countTask: 0 }
        ]

        const newTaskNameToUpdate = 'Updated'
        const newTaskDescriptionToUpdate = 'First task updated'
        const countTaskToUpdate = 0

        const updatedTasksToUpdate = updateTask(initialTaskToUpdate, newTaskNameToUpdate, newTaskDescriptionToUpdate, countTaskToUpdate)
        
        expect(updatedTasksToUpdate.length).toBe(1)
        

        expect(updatedTasksToUpdate[0]).toEqual({
            name: newTaskNameToUpdate,
            description: newTaskDescriptionToUpdate,
            countTask: countTaskToUpdate
        })
    })
})

//test de deleteTask 
describe('DeleteTask', () => {
    it('Supprimer une tâche de la liste', () => {
        const initialTaskToDelete: Task[] = [
            { name: 'Task 1', description: 'First task', countTask: 0},
            { name: 'Task 2', description: 'Second task', countTask: 1}
        ]

        const countTaskToDelete = 0

        const updatedTaskToDelete = removeTask(initialTaskToDelete, countTaskToDelete)

        expect(updatedTaskToDelete.length).toBe(1)
        
    })
})
