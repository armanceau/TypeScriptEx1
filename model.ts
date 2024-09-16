
interface Task {
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
    
    return tasks.splice(countTask, 1);
}