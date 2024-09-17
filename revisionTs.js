//let data:Array<any> = [11, "coucou", 12]
var user1 = {
    name: "arthur.manceau@efrei.net",
    id: 1
};
var users = [];
function createUser(name, id) {
    var newUser = {
        name: name,
        id: id,
    };
    return users.concat([newUser]);
}
