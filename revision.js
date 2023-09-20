// Promise

function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data = {name:'Prerna', age: 23}

            const error = false;
            if(!error){
                resolve(data);
            }
            else{
                reject('fetching error');
            }
        },100)
    })
}
fetchData()
.then(data=>{
    console.log('success', data)
})

.catch(error=>{
    console.log('error', error);
})


function getUsers(callback){

    setTimeout(()=>{
        const users = [
            {name:'sabastian', email:'sabastian@gmail.com'},
            {name:'james', email:'james@gmail.com'}
           
        ]
        callback(users)

    })
}

function findUser(username){
    getUsers(users=>{
        const user = users.find(user=>user.name==username)
        console.log(user)
    })
}

findUser('james')