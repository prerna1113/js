

console.log("hello index")

function getUsers(callback) {
    setTimeout(()=>{
        const users= [
            {name: 'John', email: 'john@example.com'},
            {name:'janet', email: 'janet@example'}
        ]
        callback(users)
    },100)

    
}

function findUsers(username) {
    getUsers(users=>{
        const user = users.find(user=> user.name==username)
        console.log(user)
    })
}

findUsers('John')
