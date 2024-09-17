//let data:Array<any> = [11, "coucou", 12]

interface User {
    name: string,
    id: number
}

let user1: User = {
    name: "arthur.manceau@efrei.net",
    id: 1
}

let users: Array<User> = [

]


function createUser(name: string, id: number){
    let newUser :User = {
        name: name,
        id: id,
    };
    return users.concat([newUser]);
}