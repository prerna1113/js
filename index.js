

function getUser(callback) {
    setTimeout(()=>{
        const users =[
            {name: 'John', email: 'john@example.com'},
            {name: 'Joe', email: 'Joe@example.com'}
        ]
        callback(users)
    },100)
}

function findUsers(username) {
    getUser(users=>{
        const user = users.find(user=>user.name==username)
        console.log(user)
    })
}

findUsers('John')
