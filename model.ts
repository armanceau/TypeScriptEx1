
export interface Task {
    name: string,
    description: string,
    countTask: number
}


export function addTask(
    tasks: Array<Task>, 
    name: string, 
    description:string,
    countTask: number ) : Array<Task>{

    let newTask :Task = {
        name:name,
        description:description,
        countTask:countTask,
    }
    
    return tasks.concat([newTask]) 

}

export function removeTask(tasks: Array<Task>, 
    countTask: number ) : Array<Task>{
    
    //On supprime la tâche à l'id countTask (1 = une seule tâche à supprimer)
    return tasks.splice(countTask, 1);
}

export function updateTask(tasks: Array<Task>, 
    name: string, 
    description:string,
    countTask: number ) : Array<Task>{

    if (countTask >= 0 && countTask < tasks.length) {
        tasks[countTask].name = name;
        tasks[countTask].description = description;
    }
    else{
        console.log(`index se toruve hors du tableau : ${countTask}`)
    }

    return tasks;
}