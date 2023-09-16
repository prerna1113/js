

function getUsers(callback){

    setTimeout(()=>{
        const users = [
            {
                name:'John',email:'john@example.com'
            },
            {name:'John Smith',email:'john@example'}
        ];
        callback(users);

    },1000)
}

function findUsers(username){
    
    getUsers(users=>{
        const user = users.find(user=> user.name==username)
        console.log(user)
    })

}

findUsers('John Smith')



