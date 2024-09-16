interface Task {
    nom: string, 
    createur: string, 
    description: string
}



export function addTask(tasks: Array<Task>, nom: string, createur: string, description: string){

    let newTask:Task = {
        nom:nom,
        createur: createur,
        description: description
    }

    return tasks.concat([newTask])
}



